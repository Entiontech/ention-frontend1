import Header from "components/layout/header";
// import gradientbg1 from "assets/gradient-bg1.png"; // Missing file
import { TypingEffect } from "components/generic/TypingEffect";
import { BlurInText } from "components/generic/BlurInText";
import Footer from "components/layout/footer";

const RegisterForm = () => {
  return (
    <>
      <Header />
      <main className={"main overflow-x-hidden relative z-0 w-full"}>
        <div className="h-[130px]"></div>
        <div className="flex flex-col w-full items-center">
          <div style={{ letterSpacing: "7px" }} className="flex items-center">
            <div className="text-white text-2xl mr-4">INTRODUCING</div>
            <div>
              <TypingEffect
                className="text-[#01E9FE] font-bold text-2xl"
                text="MADE IN INDIA"
              />
            </div>
          </div>
          <BlurInText className="text-white text-[50px] mt-8 text-3xl font-bold">
            <span>ENTION</span>
            <span
              style={{ position: "relative", top: "-18px", fontSize: "31px" }}
              className="font-thin text-[50px]"
            >
              &reg;
            </span>{" "}
            <span>COMPUTING DEVICE</span>
          </BlurInText>
        </div>
        <div className="h-[100px]"></div>
        <div
          className=" flex flex-col -z-10"
          style={{
            backgroundImage: `url('/assets/0N1A1389.png')`,
          }}
        >
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf7Hi-gxtCDaYVZTXAKijKmoV4FrEG-9B7JYCNpQEbz8RpWeg/viewform?embedded=true"
              width="540"
              height="800"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default RegisterForm;
