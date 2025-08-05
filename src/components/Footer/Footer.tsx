import amazonPay from "../../../public/assets/amazon-pay.png";
import americanExpress from "../../../public/assets/American-Express-Color.png";
import masterCard from "../../../public/assets/mastercard.webp";
import payPal from "../../../public/assets/paypal.png";
import googlePlay from "../../../public/assets/get-google-play.png";
import appStore from "../../../public/assets/get-apple-store.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-100 py-8 px-3">
        <div className="container space-y-4 mx-auto">
          <header>
            <h2 className="text-xl font-semibold text-slate-900">
              Get the FreshCart app
            </h2>
            <p className="text-slate-500">
              we will send you a link, open it to on your phone to download the
              app
            </p>
          </header>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <input
              className="form-control w-auto grow "
              type="email"
              placeholder="Email Address"
            />
            <button className="btn uppercase font-semibold bg-yellow-500 hover:bg-yellow-600 ">
              Share App link
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center py-4 border-y-2 border-slate-300 border-opacity-50 border-solid">
            <div className="payment-parteners flex flex-col lg:flex-row items-center gap-3">
              <h3 className="font-semibold">Payment Parteners</h3>
              <Image  style={{height:'auto', width:'80px'}} src={amazonPay} width={0} height={0} alt="" />
              <Image  style={{height:'auto', width:'80px'}} src={americanExpress} width={0} height={0} alt="" />
              <Image  style={{height:'auto', width:'80px'}} src={masterCard} width={0} height={0} alt="" />
              <Image  style={{height:'auto', width:'80px'}} src={payPal} width={0} height={0} alt="" />
            </div>
            <div className="download flex flex-col lg:flex-row gap-3 items-center">
              <h3 className="font-semibold">Get deliveries with FreshCart</h3>
              <Image  style={{height:'auto', width:'112px'}} src={googlePlay} width={0} height={0} alt="" />
              <Image  style={{height:'auto', width:'110px'}} src={appStore} width={0} height={0} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
