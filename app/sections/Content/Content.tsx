"use client";

import { ContentEditor, ContentGroup, InfoBox, Slider } from "@/app/components";
import { ContentOptions, MainOption, Option } from "@/app/typings";
import React, { useState } from "react";

const Content = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [info, setInfo] = useState<MainOption | null>(null);
  const [infoSelection, setInfoSelection] = useState<Option | null>(null);
  const [levels, setLevels] = useState(4);
  const [chunks, setChunks] = useState(20);

  const showInfo = (
    options: ContentOptions,
    type: string,
    selected?: string
  ) => {
    const infoData = options[type];
    setInfo(infoData);
    if (selected) {
      const current = infoData?.options.find((item) => item.title === selected);
      setInfoSelection(current || null);
    } else {
      setInfoSelection(infoData?.options[0]);
    }
    setInfoVisible(true);
  };

  const hideInfo = () => {
    setInfoVisible(false);
    setInfo(null);
    setInfoSelection(null);
  };

  return (
    <section className="pt-4 w-full flex gap-4">
      <div className="flex flex-col items-start w-3/5">
        <ContentGroup group="Display">
          <ContentEditor
            options={displayOptions.Graphics.options}
            displayOptions={displayOptions}
            onHover={showInfo}
            onLeave={hideInfo}
          >
            Graphics
          </ContentEditor>
          <ContentEditor
            options={displayOptions["3d Anaglyph"].options}
            displayOptions={displayOptions}
            onHover={showInfo}
            onLeave={hideInfo}
          >
            3d Anaglyph
          </ContentEditor>
          <ContentEditor
            options={displayOptions["GUI Scale"].options}
            displayOptions={displayOptions}
            onHover={showInfo}
            onLeave={hideInfo}
          >
            GUI Scale
          </ContentEditor>
        </ContentGroup>

        <ContentGroup group="Graphics">
          <ContentEditor
            options={graphicsOptions.Clouds.options}
            displayOptions={graphicsOptions}
            onHover={showInfo}
            onLeave={hideInfo}
          >
            Clouds
          </ContentEditor>
          <Slider
            value={levels}
            min={0}
            max={4}
            setValue={setLevels}
            onHover={() => showInfo(graphicsOptions, "Mipmap Levels")}
            onLeave={hideInfo}
          >
            Mipmap Levels
          </Slider>
          <Slider
            value={chunks}
            min={0}
            max={50}
            setValue={setChunks}
            extraText="Chunks"
            onHover={() => showInfo(graphicsOptions, "Render Distance")}
            onLeave={hideInfo}
          >
            Render Distance
          </Slider>
          <ContentEditor
            options={graphicsOptions["GUI Scale"].options}
            displayOptions={graphicsOptions}
            onHover={showInfo}
            onLeave={hideInfo}
          >
            GUI Scale
          </ContentEditor>
        </ContentGroup>
      </div>

      <div className="flex-grow mt-11 w-2/5">
        {infoVisible ? (
          <InfoBox
            title={info?.name}
            option={infoSelection?.title}
            info={infoSelection !== null ? infoSelection : undefined}
            multipleOption={info?.multipleOption}
            otherOptions={info?.options}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Content;

const displayOptions: ContentOptions = {
  Graphics: {
    name: "Graphics",
    multipleOption: true,
    options: [
      {
        title: "Fancy",
        info: "Fancy Graphics is a Setting in which Blocks and Mobs, by default, have more realistic textures. The option was made default",
      },
      {
        title: "Simple",
        info: "Simple Graphics is a Setting in which Blocks and Mobs, by default, have more realistic textures. The option was made default",
      },
      {
        title: "Normal",
        info: "Normal Graphics is a Setting in which Blocks and Mobs, by default, have more realistic textures. The option was made default",
      },
      {
        title: "Wild",
        info: "Wild Graphics is a Setting in which Blocks and Mobs, by default, have more realistic textures. The option was made default",
      },
      {
        title: "Epic",
        info: "Epic Graphics is a Setting in which Blocks and Mobs, by default, have more realistic textures. The option was made default",
      },
    ],
  },
  "3d Anaglyph": {
    name: "3d Anaglyph",
    multipleOption: false,
    options: [
      {
        title: "Off",
        info: "Less 3d madness",
      },
      {
        title: "On",
        info: "More 3d madness",
      },
    ],
  },
  "GUI Scale": {
    name: "GUI Scale",
    multipleOption: true,
    options: [
      {
        title: "Auto",
        info: "GUIIIIIII!",
      },
      {
        title: "Small",
        info: "GUIIIIIII!",
      },
      {
        title: "Normal",
        info: "GUIIIIIII!",
      },
      {
        title: "Large",
        info: "GUIIIIIII!",
      },
    ],
  },
};

const graphicsOptions: ContentOptions = {
  Clouds: {
    name: "Clouds",
    multipleOption: false,
    options: [
      {
        title: "Off",
        info: "Less Clouds",
      },
      {
        title: "On",
        info: "More CLouds",
      },
    ],
  },
  "Mipmap Levels": {
    name: "Mipmap Levels",
    multipleOption: false,
    options: [
      {
        title: "",
        info: "Set the number of levels",
      },
    ],
  },
  "Render Distance": {
    name: "Render Distance",
    multipleOption: false,
    options: [
      {
        title: "",
        info: "Set the number of chunks",
      },
    ],
  },
  "GUI Scale": {
    name: "GUI Scale",
    multipleOption: true,
    options: [
      {
        title: "Auto",
        info: "GUIIIIII",
      },
      {
        title: "Small",
        info: "GUIIIIIII!",
      },
      {
        title: "Normal",
        info: "GUIIIIIII!",
      },
      {
        title: "Large",
        info: "GUIIIIIII!",
      },
    ],
  },
};
