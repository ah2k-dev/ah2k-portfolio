import { FC, useState } from "react";
import { socialLinks } from "../shared/contants";
import { FiSend } from "react-icons/fi";
import Alert from "./Alert";
const Contact: FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setIsSent(true);
    console.log("email: ", email);
    console.log("name: ", name);
    console.log("subject: ", subject);
    setLoading(true);
    fetch(
      "https://public.herotofu.com/v1/d1d08ec0-b028-11ed-bca4-27c965651142",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
        }),
      }
    )
      .then((response) => {
        // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
        if (response.status === 422) {
          throw new Error("Are you robot?");
        }

        if (response.status !== 200) {
          throw new Error(`${response.statusText} (${response.status})`);
        }

        return response.json();
      })
      .then(() => {
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
        setLoading(false);
        setEmail("");
        setName("");
        setSubject("");
      })
      .catch((err) => {
        setIsError(err.toString());
        setTimeout(() => {
          setIsError(false);
        }, 5000);
        setLoading(false);
      });
  };
  return (
    <div
      className="contact pb-20"
      style={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        maxHeight: "max-content",
        paddingTop: "30px",
        cursor: "none",
        paddingBottom: "30px",
      }}
      id="contact"
    >
      <h1 className="text-center text-4xl mt-14 md: mb-10">Get in touch</h1>
      {/* <div className="alertContainer">
        Alert
      </div> */}
      <Alert sent={isSent} error={isError}/>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
          <div className="flex-1">
            <form
              action={process.env.NEXT_PUBLIC_FORM_URL}
              method="POST"
              className="flex flex-col gap-2"
              onSubmit={handleSend}
            >
              <label
                htmlFor="name"
                style={{
                  cursor: "none",
                }}
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                minLength={3}
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  cursor: "none",
                }}
              />
              <label
                htmlFor="email"
                style={{
                  cursor: "none",
                }}
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  cursor: "none",
                }}
              />
              <label
                htmlFor="subject"
                style={{
                  cursor: "none",
                }}
              >
                Message
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="I want to talk to you"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  cursor: "none",
                }}
              />
              <button
                className="mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
                type="submit"
                style={{
                  cursor: "none",
                  // backgroundColor: loading ? "red" : "#2884E0"
                  opacity: loading ? "0.2" : "1",
                }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FiSend />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send
                  </>
                )}
              </button>
            </form>
          </div>
          <div className="flex-1">
            <h1 className="text-xl mb-3">Other places</h1>
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
                style={{
                  cursor: "none",
                }}
              >
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt=""
                />
                <h1>{item.title}</h1>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Contact;
