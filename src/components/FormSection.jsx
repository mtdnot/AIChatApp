// components/FormSection.jsx
const FormSection = ({generateResponse,  generateResponseWithImage, newQuestion, setNewQuestion, imageData}) => {
    
    const func1 = () => {
        let p1_element = document.getElementById("p1");
        p1_element.classList.remove("text_type1");
        
    }
    const func2 = () => {
        let p1_element = document.getElementById("p2");
        p1_element.classList.remove("text_type1");
    }
    const changeColor1 = () =>{
        let p1_element = document.getElementById("p1");
        p1_element.classList.add("text_type1");
        setInterval(func1,2000);

    }
    const changeColor2 = () =>{
        let p2_element = document.getElementById("p2");
        p2_element.classList.add("text_type1");
        setInterval(func2,2000);

    }
    return(
        <div className="form-section">
            <textarea
                row="5"
                className="form-control"
                placeholder="どのような症状がありますか？
                            What symptoms are you experiencing?"
                value = {newQuestion}
                onChange = {(e) => setNewQuestion(e.target.value)}
            ></textarea>
            <div className="gaming line"></div>
            <button className="btn" onClick={() => {generateResponse( newQuestion, setNewQuestion);changeColor1();}}>
                <span id="p1">Generate Response</span>
            </button>            
            <button id="tmp_margin" className="btn" onClick={ () => {generateResponseWithImage(newQuestion, setNewQuestion, imageData);changeColor2();}}>
               <span id="p2">Generate Response With Image</span>
            </button>
        </div>
    )
}

export default FormSection;