import "../style/Education.css";
function Education(){
    return(
        <main className="edu-main">
             <div className="edu-text">
                <h1>Education</h1>
                <p>Trusted by Professionals for Exceptional Quality and Service Our clients from various industries trust us to deliver top-notch quality and results. Here's what they have to say about our work..</p>
             </div>
             <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Goverment College For Women</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
               <h1>Intermediate </h1>
               <p>I completed my Intermediate in Commerce from a government women's college.</p>
                </div>
             </div>
             {/* box 2 */}
             <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Governor house</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
               <h1> Artificial intelligence</h1>
               <p>At Governor's House, I've been delving into the world of artificial intelligence and have successfully completed a TypeScript course. Currently, I'm focusing on mastering Next.js, a popular React framework, to enhance my full-stack development capabilities. By combining my knowledge of AI and these cutting-edge technologies, I aim to create innovative and dynamic web applications.</p>
                </div>
             </div>
             {/* box 3 */}
             <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Korean academy</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
               <h1> CIT Course</h1>
               <p>I completed the CIT course at Korean Academy. This course helped me develop essential skills such as [specific skills, like programming languages, software development methodologies, database management.]
               </p>
                </div>
             </div>
        </main>
    )
}
export default Education