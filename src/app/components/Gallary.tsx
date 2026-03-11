import React from "react";

function Gallary() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .lightbox {
            display: none;
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.8);
          }
          .lightbox-image {
            display: block;
            margin: auto;
            max-width: 100%;
            max-height: 100%;
          }
          .close {
            color: #fff;
            font-size: 3em;
            position: absolute;
            top: 20px;
            right: 30px;
            cursor: pointer;
          }
          .gallery {
            width: 90vw;
            max-width: 1200px;
            margin: 0 auto;
            grid-template-rows: 1fr;
            grid-column-gap: 30px;
            grid-row-gap: 30px;
          }
          .gallery img {
            max-width: 100%;
            cursor: pointer;
          }
          .gallery img:hover {
            max-width: 100%;
            cursor: pointer;
          }
          `,
        }}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-2.5 lg:pb-16 pb-10">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Our Gallery
            </h2>
            <div className="w-full text-center text-gray-600 text-lg font-normal leading-8">
              Step into a realm where art comes to life.
            </div>
          </div>
          <div className="gallery">
            <div className="flex flex-col mb-10">
              <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
                <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713942989.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full"
                  />
                </div>
                <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713943004.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                <div className="h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713943024.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                  />
                </div>
                <div className="h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713943039.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                  />
                </div>
                <div className="h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713943054.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox" id="lightbox">
          <span className="close" id="close">
            ×
          </span>
          <img src="" alt="" className="lightbox-image" id="lightbox-image" />
        </div>
      </section>
    </div>
  );
}

export default Gallary;
