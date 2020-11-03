import React from 'react';
import './form.scss';

interface IState {
  status: string;
  loading: boolean;
}

interface IProp {
  display: () => void;
}

export function Success(props: IProp) {
  return (
    <div id="success">
      <div className="error_container">
        <h1>
          <i className="fas fa-check-double"></i>
        </h1>
        <h2>Your message has been sent</h2>
        <p>Thanks for reaching out. I will reply as soon as possible normally takes less than 24 hours </p>
        <div className="go_button_container" style={{ display: 'flex' }}>
          <button onClick={props.display}>Thanks</button>
        </div>
      </div>
    </div>
  );
}

export default class MyForm extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
      loading: false,
    };
  }

  submitForm(e: any) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  setStatus = () => {
    this.setState({ status: '' });
  };

  render() {
    const { status, loading } = this.state;
    return (
      <div>
        <form name="contact" method="post" action="https://formspree.io/f/xyybjnyq" onSubmit={this.submitForm}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="form_section">
            <label>
              <span>Your Name*</span>
              <input type="text" name="name" placeholder="Enter your name" required />
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Email*</span>
              <input required type="email" name="email" placeholder="Enter your email" />
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Message*</span>
              <textarea required name="message" rows={10} minLength={10}></textarea>
            </label>
          </div>

          <div className="form_section">
            <button type="submit"> {!loading ? 'Send Message' : <i className="fas fa-ellipsis-h"></i>} </button>
          </div>
        </form>

        {status === 'SUCCESS' ? <Success display={this.setStatus} /> : ''}
        {status === 'ERROR' && (
          <p style={{ textAlign: 'center', color: 'red' }}>
            {' '}
            <b>Ooops! There was an error.</b>
          </p>
        )}
      </div>
    );
  }
}
