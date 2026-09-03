import React from "react";

export default function Card(props: {
  title: string;
  imagePath: string;
  optionalImg?: string;
  extraDetails: React.JSX.Element;
}) {
  //This card component should be reusable between components
  return (
    <div className="bg-background flex h-50 w-35 flex-col gap-0 overflow-hidden rounded-2xl transition-shadow duration-100 ease-linear hover:shadow-[15px_4px_15px_-3px_rgba(0,0,0,0.9)]">
      <div
        className="relative isolate h-30 overflow-hidden border-b-2 border-b-slate-600 bg-(image:--background-img) bg-cover px-3"
        style={
          {
            "--background-img": `url(${props.imagePath})`,
          } as React.CSSProperties
        }
      >
        {/* Now I have my Image Tag */}

        {/* Title Span */}
        <span
          className={`absolute right-0 bottom-0 z-5 w-full bg-black/60 px-3 text-center text-lg`}
        >
          {props.title}
        </span>
      </div>
      <div className="h-20">{props.extraDetails}</div>
    </div>
  );
}
