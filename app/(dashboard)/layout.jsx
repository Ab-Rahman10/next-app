import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 border border-yellow-500">
            <ul>
              <li>Home</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="col-span-9 border border-yellow-500">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
