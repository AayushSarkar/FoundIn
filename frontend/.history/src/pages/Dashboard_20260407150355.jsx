<div className="flex-1 px-8 py-6 overflow-y-auto space-y-6">

  {/* HEADER */}
  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-800">
      Dashboard Overview
    </h2>
    <p className="text-gray-500 text-sm mt-1">
      Monitor performance, analyze trends, and manage key insights.
    </p>
  </div>

  {/* KPI + ANIMATION */}
  {dashboard?.tableData?.length > 0 && (
    <div className="grid lg:grid-cols-3 gap-6 items-center">

      {/* CARDS */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
        {dashboard.tableData.map((row, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 
            hover:shadow-md transition"
          >
            <h4 className="text-xs text-gray-500 mb-1">
              {row.column1}
            </h4>

            <p className="text-2xl font-semibold text-gray-800">
              {row.column2}
            </p>

            <p className="text-sm text-sky-600 mt-1">
              {row.column3}
            </p>
          </div>
        ))}
      </div>

      {/* ANIMATION */}
      <div className="flex justify-center">
        <div className="w-[260px]">
          <Lottie animationData={graphAnimation} loop />
        </div>
      </div>

    </div>
  )}

  {/* TEXT CARDS */}
  {dashboard?.textData?.length > 0 && (
    <div className="grid md:grid-cols-2 gap-6">
      {dashboard.textData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-100"
        >
          <h3 className="font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )}

</div>