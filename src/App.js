import './css/App.css';
import FormSection from './components/FormSection';
import AnswerSection from './components/AnswerSection';
import ImageInput from './components/ImageInput';
import { OpenAI } from 'openai';
import { useState } from 'react';
import Live2dModel from './components/Live2dModel';

const App = () => {
    const openai = new OpenAI({ 
        apiKey: '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' ,
        dangerouslyAllowBrowser: true //envに訂正しとけ//見せられないよ!
    })

    const [newQuestion ,setNewQuestion] = useState('');
    const [storedValues, setStoredValues] = useState([
        {
        question: "こんにちは!",
        answer: "何かお困りのことがありましたら、どうぞご相談ください。医師としてお力になれるように努めます。",
        },
        {
            question: "操作方法1-メッセージの送信方法",
            answer: "左上のテキストボックスに要件を教えてください。そして、Generate Responeで内容を送信してください。",
        },
        {
            question: "操作方法2-画像付きの診断の場合",
            answer: "ファイル選択から画像を選んでください。次に、Generate Response With Imageで内容を送信してください。Generate Responseの場合、画像を用いた機能が制限されるため注意してください。",
        },
        {
            question: "Developed By",
            answer: "津西高校-課題研究-医学１班",
        },

        {
            question: "どんな風に入力すればいいの？",
            answer: "あなたがインフルエンザの場合、『症状として「高熱」や、関節痛、筋肉痛、頭痛などの他、全身倦怠感、食欲不振などの「全身症状」』などを入れてみたり、『熱があり、ぼーっとしている。また体の関節や筋肉が痛い。あと頭痛もあってだるい。食事がのどを通らない』なども大丈夫です。 ",
        },
        {
            question: "To Developers",
            answer: "2つのサーバーからこのウェブアプリは作られている npm start,cd src/CubismSdkForWeb-4-r.7/Samples/TypeScript/Demo && npm start ",
        },
    ]);
    const [imageData, setImageData] = useState('');
    const roleSystem = "答えは大体3行で答えてください。"

    const generateResponse = async (newQuestion, setNewQuestion) => {
        //Set up OpenAI API and handle response
        const options ={
            model: "gpt-4-1106-preview",//gpt-3.5-turbo
            messages: [
            {
                role: 'system',
                content: roleSystem
            },
            {
                role: "user",
                content: newQuestion,
            },
            
            ],
            
        };

        const completion = await openai.chat.completions.create({
            ...options
          });

          //console.log(completion.choices[0]?.message.content);

          if (completion.choices) {
            setStoredValues([
                {
                    question: newQuestion,
                    answer: completion.choices[0]?.message.content,
                },
                ...storedValues,
            ]);
            setNewQuestion('');
        }
    }
    const generateResponseWithImage = async (newQuestion, setNewQuestion,imageData) =>{
        //  const image = readFileSync(imageData);
        //const base64Str = imageData.toString("base64");
        //imageDataはそれ自体がdataURIなのか
        console.log(imageData);
        const completion = await openai.chat.completions.create({
            model: "gpt-4-vision-preview",
            //max_tokensの指定が吉とでた。もしこれを外せば、16字程度の日本語しか返ってこない
            max_tokens: 2000,
            messages: [
                {
                    role: 'system',
                    content: roleSystem
                },
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: newQuestion,
                        },
                        {
                            type: "image_url",
                            image_url: {
                              url: imageData,
                            },
                        },
                    ],
                },
            ],
            });

            if (completion.choices) {
                setStoredValues((preValues) => [
                    {
                        question: newQuestion,
                        answer: completion.choices[0]?.message.content,
                    },
                    ...preValues,
                ]);
                setNewQuestion('');
            }
    
        }
    return (
        <div>
            <Live2dModel/>
            <div className="formsection">
            <FormSection generateResponse={generateResponse} 
                         generateResponseWithImage={generateResponseWithImage} 
                         newQuestion={newQuestion} 
                         setNewQuestion={setNewQuestion} 
                         imageData={imageData} />
            <ImageInput setImageData={setImageData}/>
            </div>   
            <div className="answersection">
            <AnswerSection storedValues={storedValues}/>
            </div>    
        </div>
    );
};
export default App;