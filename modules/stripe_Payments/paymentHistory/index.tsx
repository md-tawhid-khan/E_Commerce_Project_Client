

const PaymentHistory = ({verified,error}:{verified:boolean,error:string|null}) => {
     if (error) return <p style={{ color: "red" }}>{error}</p>

  if (!verified) return <p>Verifying payment...</p>

  return (
  <div>
   <h1>✅ Payment Successful</h1>
   
  </div>
  )
};

export default PaymentHistory;