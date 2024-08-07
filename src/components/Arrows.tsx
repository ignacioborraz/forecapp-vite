import { Dispatch, SetStateAction } from "react";

type Props = {
  slide: number;
  setSlide: Dispatch<SetStateAction<number>>;
  length: number;
};

export default function Arrows({ slide, setSlide, length }: Props) {
  const prev = () => {
    if (slide === 0) {
      setSlide(length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  const next = () => {
    if (slide === length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  return (
    length > 1 && (
      <>
        <span
          onClick={prev}
          className="absolute top-0 left-0 w-1/2 h-full rounded-l-md animate-bounce-left flex flex-col items-start cursor-pointer"
        >
          <span className="w-[20px] flex-grow bg-slate-800 rounded-l-md flex justify-center items-center">
            <img
              className="w-[15px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP1JREFUSEu1lTFuwkAQRd8IiogCpQMpHRKipuECgQukhBMkEhegoI9CDRVSIqUJF4DT8cNKjmStFXuNPW7X+m9m9u8fw/kzZ30aAySNgE9gYGaTuOBGAEmvwA7oBWEzK+jdBZA0BL6B53zFrQAkvQBH4LEwjiYdSOoDe2D1nzHu7kBSGMUX8FTmutoASQ/AO7AOd1hl6VoASVPgBxhXCf+dJwEkdYANsAW6qeJJNs3EL8C8jnByBxngDCxcAEHUdUT5qt0uOYL42TQC+Ty0CBKi4gAsW4+KCOQTdhHEL64j0Bvw0frCiSBhZZ5u0XI1s1mrKzPltVdGcIpI2T+/Qy1RGXjarNEAAAAASUVORK5CYII="
            />
          </span>
        </span>
        <span
          onClick={next}
          className="absolute top-0 right-0 w-1/2 h-full rounded-r-md animate-bounce-right flex flex-col items-end cursor-pointer"
        >
          <span className="w-[20px] flex-grow bg-slate-800 rounded-r-md flex justify-center items-center">
            <img
              className="w-[15px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANlJREFUSEu11jEKwjAYhuH3u514AUVcxM3ZwVlBdxdP4OoBRBd38QCC6FBwFAcRRCIBAx1a2rT9uxbep7TJnwrjS8Z9MgHn3A24AgNJlzoPkQe4f/QFjCWtqiJFQOjugb6keyxUFvDdBzCUtIlBYoDQXQMjSc8yUBXAdxOgJ+lQhFQFfNcvhCUwkfTOg+oAoXkGOpJOWUgTgO9+gCmwkPRNQ00BobkDWmmkaWALtC0A/4pmwNziFZl9ZNNlarrRzEaF6bAzG9dmB84R8Fu+a3JkFo3gmPvmfxU/tep8GcWRg6sAAAAASUVORK5CYII="
            />
          </span>
        </span>
      </>
    )
  );
}
