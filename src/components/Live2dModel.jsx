const Live2dModel = () => {
    return (
    <>  
        <iframe src="http://localhost:5000/Samples/TypeScript/Demo/" 
                className="live2dmodel" frameborder="0"></iframe>
        <div className="attribute" >
          <p>Diagnosis of AI in Research Question Program</p>
          <p>津西高等学校</p>
          <p>医学一班</p>
        </div>
        <div className="introduce">
          マルチモーダル対話エージェント&nbsp;
          <span>.K</span>
        </div>
          <p id="backtext">
              I am an automated question and answer system, designed to assist you
              in finding relevant information. You are welcome to ask me any queries
              you may have, and I will do my utmost to offer you a reliable
              response. Kindly keep in mind that I am a machine and operate solely
              based on programmed algorithms.
          </p>
    </>
    )
}
export default Live2dModel;