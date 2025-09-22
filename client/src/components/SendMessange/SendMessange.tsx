export const SendMessange = () => {
  return (
    <>
      <form
        style={{
          height: "200px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor="femail">Your Email Address</label>
        <input type="text" id="femail" placeholder="Email" required />

        <label htmlFor="fmessange">Your Message</label>
        <textarea id="fmessange" placeholder="Messange" rows={10} required />
        <div
          className="g-recaptcha"
          data-sitekey="6LefBqgrAAAAAIA-Woxfo_qHiO9rUQhLTzPRkGoK"
        ></div>
      </form>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
    </>
  );
};
