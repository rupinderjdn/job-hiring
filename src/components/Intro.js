
function Intro(props) {
  // const {FrontEnd, NodeJs, MEAN, FullStack, ShowPanel, ShowAppliedJobs} = props.store.getState();

  return (
    <div className="Intro">
      <div className="container-fluid row d-flex flex-column justify-content-center">
          <img className="col-12 my-3" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/we-are-hiring-postcard-design-template-9d69ace4777878ef63cd65ffcdda1af3_screen.jpg?ts=1615926107" />
          <div className="row">
            <div className="col-md-6 my-2">
              This is a Job Application App developed using React in the front-end. In this app, we are accepting the job application for various posts in our company. In order to apply for the job, the user has to click on the application-form tab that is presented on the menu. A form will be opened. You have to fill all the fields with appropriate data. All the fields are required that means you should not leave any field blank. For the email field, you should provide valid email address. For the contact information field, you should provide your 10 digits mobile number.
            </div>
            <div className="col-md-6 my-2">
              For the job role you are applying for, you should select one from the dropdown menu. In the experience field, put your experience in years and months format. Incase if you are fresher, you can put 0. And the final field should contain all your technical skills. You have to put it in a single sentence with comma separated. Once everything is done, hit the submit button and you are done. After we go through your application, you will hear from us in two days.
            </div>
          </div>
      </div>
    </div>
  );
}

export default Intro;
