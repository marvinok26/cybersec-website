import React from "react";

const PartnerCarousel = () => {
  return (
    <section className="bg-white dark:bg-gray-100" aria-labelledby="partner-carousel-title">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2
          id="partner-carousel-title"
          className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-black md:text-4xl"
        >
          You’ll be in good company
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 dark:text-gray-400">
          {/* Fortinet */}
          <a
            href="https://commons.wikimedia.org/wiki/File:Fortinet_logo.svg"
            target="_blank"
            rel="noopener noreferrer"
            title="™/®Fortinet, Public domain, via Wikimedia Commons"
            aria-label="Fortinet logo"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/512px-Fortinet_logo.svg.png?20210503171524"
              alt="Fortinet logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* Trend Micro */}
          <a
            href="https://commons.wikimedia.org/wiki/File:Trend_Micro_logo.svg"
            target="_blank"
            rel="noopener noreferrer"
            title="Trend Micro, Public domain, via Wikimedia Commons"
            aria-label="Trend Micro logo"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Trend_Micro_logo.svg/256px-Trend_Micro_logo.svg.png?20160916133838"
              alt="Trend Micro logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* Microsoft */}
          <a
            href="https://commons.wikimedia.org/wiki/File:Microsoft_logo_(2012).svg"
            target="_blank"
            rel="noopener noreferrer"
            title="Microsoft Corporation - Jason Wells, Public domain, via Wikimedia Commons"
            aria-label="Microsoft logo"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png?20230221160917"
              alt="Microsoft logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* AWS */}
          <a
            href="https://commons.wikimedia.org/wiki/File:Amazon_Web_Services_Logo.svg"
            target="_blank"
            rel="noopener noreferrer"
            title="Amazon.com Inc., Apache License 2.0, via Wikimedia Commons"
            aria-label="Amazon Web Services logo"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png?20170912170050"
              alt="Amazon Web Services logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* Sophos */}
          <a
            href="https://commons.wikimedia.org/wiki/File:Sophos_logo.svg"
            target="_blank"
            rel="noopener noreferrer"
            title="Sophos logo"
            aria-label="Sophos logo"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sophos_logo.svg/128px-Sophos_logo.svg.png?20160513084831"
              alt="Sophos logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* Symantec */}
          <a
            href="https://www.vectorlogo.zone/logos/symantec/symantec-ar21.svg"
            target="_blank"
            rel="noopener noreferrer"
            title="Symantec logo"
            aria-label="Symantec logo"
          >
            <img
              src="https://www.vectorlogo.zone/logos/symantec/symantec-ar21.svg"
              alt="Symantec logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* Dell EMC */}
          <a
            href="https://cdnlogo.com/logo/dell-emc_44793.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Dell EMC logo"
            aria-label="Dell EMC logo"
          >
            <img
              src="https://static.cdnlogo.com/logos/d/9/dell-emc.svg"
              alt="Dell EMC logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* Huawei */}
          <a
            href="https://www.vectorlogo.zone/logos/huawei/huawei-ar21.svg"
            target="_blank"
            rel="noopener noreferrer"
            title="Huawei logo"
            aria-label="Huawei logo"
          >
            <img
              src="https://www.vectorlogo.zone/logos/huawei/huawei-ar21.svg"
              alt="Huawei logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* HPE */}
          <a
            href="https://commons.wikimedia.org/wiki/File:Hewlett_Packard_Enterprise_logo.svg"
            target="_blank"
            rel="noopener noreferrer"
            title="Hewlett Packard Enterprise logo"
            aria-label="Hewlett Packard Enterprise logo"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/512px-Hewlett_Packard_Enterprise_logo.svg.png?20210501045011"
              alt="Hewlett Packard Enterprise logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          {/* Cisco */}
          <a
            href="https://www.vectorlogo.zone/logos/cisco/cisco-ar21.svg"
            target="_blank"
            rel="noopener noreferrer"
            title="Cisco logo"
            aria-label="Cisco logo"
          >
            <img
              src="https://www.vectorlogo.zone/logos/cisco/cisco-ar21.svg"
              alt="Cisco logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
