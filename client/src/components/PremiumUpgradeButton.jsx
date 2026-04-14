import React from "react";
import axios from "axios";
import { Crown } from "lucide-react";

const PremiumUpgradeButton = () => {
  const handlePayment = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount: 499,
      });

      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "HouseAI Premium",
        description: "Upgrade to Premium Plan",
        order_id: data.order.id,
        handler: function (response) {
          alert("✅ Payment Successful!\nPayment ID: " + response.razorpay_payment_id);

          // optional: premium flag save
          localStorage.setItem("premiumUser", "true");
        },
        prefill: {
          name: "Ram Shinde",
          email: "ram@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#06b6d4",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("❌ Payment failed");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="btn-premium flex items-center gap-2"
    >
      <Crown size={18} />
      Upgrade to Premium
    </button>
  );
};

export default PremiumUpgradeButton;