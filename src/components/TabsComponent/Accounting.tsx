const Accounting = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4 pb-8">
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-semibold text-sm">RECEIVABLES</p>
          <hr className="border-inherit" />
        </div>
        <div className="flex gap-6">
          <p className="font-semibold text-sm">Income Account</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-semibold text-sm">PAYABLES</p>
          <hr className="border-inherit" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-sm">Expensive Account</p>
          <div>
            <p className="font-semibold text-sm">Price Difference</p>
            <p className="font-semibold text-sm">Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
