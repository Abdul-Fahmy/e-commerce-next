"use client";
import { useAppSelector } from "@/hooks/store.hook";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CheckOut() {
  const cartInfo = useAppSelector((store) => store.cartReducer.cartInfo);
  const token = useAppSelector((store) => store.userReducer.token);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const router = useRouter();

  async function createCashOrder(values: {
    shippingAddress: {
      details: string;
      phone: string;
      city: string;
    };
  }) {
    const toastId = toast.loading("We are creating your order ....");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/${cartInfo?.cartId}`,
        method: "POST",
        headers: {
          token,
        },
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.status === "success") {
        toast.success("Your order has been created");
        setTimeout(() => {
          router.push("/allorders");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  // Online Payment
  async function handleOnlinePayment(values: {
    shippingAddress: {
      details: string;
      phone: string;
      city: string;
    };
  }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo?.cartId}?url=${location.origin}`,
        method: "POST",
        headers: {
          token,
        },
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.status === "success") {
        toast.loading("redirecting you to stripe");
        setTimeout(() => {
          location.href = data.session.url;
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    onSubmit: (values) => {
      if (paymentMethod === "cash") createCashOrder(values);
      else handleOnlinePayment(values);
    },
  });
  return (
    <>
      <h1 className="mb-4 text-center md:text-start">Shipping Address</h1>
      <form
        className="space-y-4 w-3/4 mx-auto md:w-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="city">
          <input
            type="text"
            placeholder="City"
            className="form-control"
            name="shippingAddress.city"
            value={formik.values.shippingAddress.city}
            onChange={formik.handleChange}
          />
        </div>
        <div className="phone">
          <input
            type="tel"
            placeholder="Phone"
            className="form-control"
            name="shippingAddress.phone"
            value={formik.values.shippingAddress.phone}
            onChange={formik.handleChange}
          />
        </div>
        <div className="details">
          <textarea
            placeholder="details"
            className="form-control"
            name="shippingAddress.details"
            value={formik.values.shippingAddress.details}
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <button
          onClick={() => {
            setPaymentMethod("cash");
          }}
          type="submit"
          className="btn mr-2 bg-blue-500 hover:bg-blue-600"
        >
          Cash order
        </button>
        <button
          onClick={() => {
            setPaymentMethod("online");
          }}
          type="submit"
          className="btn bg-lime-600 hover:bg-lime-700"
        >
          Online Payment
        </button>
      </form>
    </>
  );
}
