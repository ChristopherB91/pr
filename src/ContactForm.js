import React, { useContext, useRef } from "react";
import emailjs from "emailjs-com";
import { RatingContext } from "./app";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zs9vyac",
        "template_0lo3cql",
        form.current,
        "user_NPqoDtEviZiRb1SzduPZ5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

const rateContext = useContext( RatingContext )

  return (
    <div>
      <h1>ContactForm</h1>
      <p>
        Here you can send me an email. The Name and Subject part is optional and
        if you want me to respond back fill out the Email spot.
      </p>
      <p>
        Was the website helpful is so leave a thumbs up, if not send an email to
        tell me how I can improve.
      </p>
      <button onClick={() => rateContext.rateDispatch2('dislike')}>Dislike - {rateContext.rateState2}
      <br />
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTEuOTM2YzAtMS0uOTg2LTYuMzczLTEuNDg2LTguMjUtLjcxNC0yLjY4OS0yLjQ3MS0zLjY4Ni01LjAwOS0zLjY4Ni0yLjI4MyAwLTQuMDc5LjYxNy01LjMzNiAxLjE1OC0yLjA1Ljg4My0zLjc5MSAxLjUxOS02LjE2OSAxLjc0NnYtLjkwNGgtNnYxMmg2di0uNzNjMi40NTQuNTg1IDQuODUyIDIuMDY2IDYuNCA3LjQwMi40ODMgMS42Ni45NzIgMy4zMjggMi44MzMgMy4zMjggMy40NDggMCAzLjAwNS01LjUzMSAyLjE5Ni04LjgxNCAxLjEwNi0uNDY2IDIuNzY3LS42OTIgMy45NzctLjc0NCAxLjQyNi0uMDYgMi41OTQtLjg1OCAyLjU5NC0yLjUwNnptLTIwIC4wNjRoLTJ2LThoMnY4em0xNS43NTUtMS4zMDJsMS4zOTQuMTY3YzEuMDc1LjEyOSAxLjEwNSAxLjUyNS4wNTEgMS41ODQtMi43NDkuMTU0LTUuMDYgMS4wMTMtNi4xMiAxLjU1Ni40MyAxLjc0OC45MiAzLjQ2My45MiA1LjUzNCAwIDIuNTA1LS43ODEgMy42NjYtMS42NzkuNTc0LTEuOTkzLTYuODU5LTUuMDU3LTguMzY0LTguMzIxLTkuMTEzdi02YzIuNTIxLS4wNzIgNC43Mi0xLjA0MSA2Ljk1OS0yLjAwNSAxLjczMS0uNzQ1IDQuODQ5LTEuNDk1IDYuNDE2LS42MTQgMS4yOTUuODM2IDEuMTE0IDEuNzM0LjI5MiAxLjY2MWwtLjc3MS0uMDMyYy0uODE1LS4wOTQtLjkyIDEuMDY4LS4xMDkgMS4xNDEgMCAwIDEuMzIxLjA2MiAxLjc0NS4xMTUuOTc2LjEyMyAxLjAyOCAxLjYwNy0uMDQgMS41NTEtLjQ1Ny0uMDI0LTEuMTQzLS4wNDEtMS4xNDMtLjA0MS0uNzk3LS4wMzEtLjg3NSAxLjA3OC0uMTQxIDEuMTcyIDAgMCAuNzE0LjAwNSAxLjc2MS4wOTlzMS4wNzggMS42MDktLjAwNCAxLjU2M2MtLjg2OC0uMDM3LTEuMDY5LS4wMjctMS4wNjktLjAyNy0uNzUuMDA1LS44NzUgMS4wMjgtLjE0MSAxLjExNXoiLz48L3N2Zz4=" alt='dislike'></img>
      </button>
      <button onClick={() => rateContext.rateDispatch('like')}>Like - {rateContext.rateState} 
      <br />
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuNDA2IDkuNTU4Yy0xLjIxLS4wNTEtMi44Ny0uMjc4LTMuOTc3LS43NDQuODA5LTMuMjgzIDEuMjUzLTguODE0LTIuMTk2LTguODE0LTEuODYxIDAtMi4zNTEgMS42NjgtMi44MzMgMy4zMjktMS41NDggNS4zMzYtMy45NDYgNi44MTYtNi40IDcuNDAxdi0uNzNoLTZ2MTJoNnYtLjkwNGMyLjM3OC4yMjggNC4xMTkuODY0IDYuMTY5IDEuNzQ2IDEuMjU3LjU0MSAzLjA1MyAxLjE1OCA1LjMzNiAxLjE1OCAyLjUzOCAwIDQuMjk1LS45OTcgNS4wMDktMy42ODYuNS0xLjg3NyAxLjQ4Ni03LjI1IDEuNDg2LTguMjUgMC0xLjY0OC0xLjE2OC0yLjQ0Ni0yLjU5NC0yLjUwNnptLTE3LjQwNiAxMC40NDJoLTJ2LThoMnY4em0xNS44OTYtNS41ODNzLjIwMS4wMSAxLjA2OS0uMDI3YzEuMDgyLS4wNDYgMS4wNTEgMS40NjkuMDA0IDEuNTYzbC0xLjc2MS4wOTljLS43MzQuMDk0LS42NTYgMS4yMDMuMTQxIDEuMTcyIDAgMCAuNjg2LS4wMTcgMS4xNDMtLjA0MSAxLjA2OC0uMDU2IDEuMDE2IDEuNDI5LjA0IDEuNTUxLS40MjQuMDUzLTEuNzQ1LjExNS0xLjc0NS4xMTUtLjgxMS4wNzItLjcwNiAxLjIzNS4xMDkgMS4xNDFsLjc3MS0uMDMxYy44MjItLjA3NCAxLjAwMy44MjUtLjI5MiAxLjY2MS0xLjU2Ny44ODEtNC42ODUuMTMxLTYuNDE2LS42MTQtMi4yMzktLjk2NS00LjQzOC0xLjkzNC02Ljk1OS0yLjAwNnYtNmMzLjI2NC0uNzQ5IDYuMzI4LTIuMjU0IDguMzIxLTkuMTEzLjg5OC0zLjA5MiAxLjY3OS0xLjkzMSAxLjY3OS41NzQgMCAyLjA3MS0uNDkgMy43ODYtLjkyMSA1LjUzMyAxLjA2MS41NDMgMy4zNzEgMS40MDIgNi4xMiAxLjU1NiAxLjA1NS4wNTkgMS4wMjQgMS40NTUtLjA1MSAxLjU4NGwtMS4zOTQuMTY3cy0uNjA4IDEuMTExLjE0MiAxLjExNnoiLz48L3N2Zz4=" alt='like'></img>
      </button>
      <hr />
      <div className="Contact">
        <form ref={form} onSubmit={sendEmail}>
          <label>Subject</label>
          <br />
          <input type="text" placeholder="Subject" name="Subject" />
          <br />
          <label>Name</label>
          <br />
          <input type="text" placeholder="Name" name="Name" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" name="Email" placeholder="Email" />
          <br />
          <label>Message</label>
          <br />
          <textarea type="text" required name="Message" placeholder="Message" />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
