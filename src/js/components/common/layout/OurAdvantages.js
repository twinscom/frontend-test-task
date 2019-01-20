import React from "react";

export default function OurAdvantages(props) {

  const list_items = {
    0: {
      icon: "beautiful",
      title: "SLICK DESIGN",
      text: "Beautifully designed with care throughout the app from your bucket list to your profile page."
    },
    1: {
      icon: "easy",
      title: "EASY TO USE",
      text: "With our easy-to-use user interface, technology is no longer in the way of you living your life."
    },
    2: {
      icon: "social",
      title: "SOCIAL SHARING",
      text: "Sharing your achievements to your Twitter and Facebook is just a click away."
    },
    3: {
      icon: "community",
      title: "COMMUNITY",
      text: "With our community driven platform, connecting with like-minded people has never been easier."
    },
    4: {
      icon: "privacy",
      title: "PRIVACY",
      text: "Not feeling social? You can hide goals or make your bucket list private entirely."
    },
    5: {
      icon: "timeline",
      title: "TIMELINE",
      text: "All your accumulated life achievements will be stored on your timeline page where you can look back at any time."
    }
  };

  return(
    <div>
      <h2 className={"main-title"}>POWERFUL TOOLS FOR A POWERFUL LIFE</h2>
      <p className={"main-subtitle"}>Our bucket list app strikes the perfect balance between beauty, power and ease of use. We provide the most powerful tools to help you manage all your life goals without getting in the way and share your life stories the most elegant way possible.</p>
      <ul className={"row"}>

        {
          Object.keys(list_items).map((item, index) => {
            const _item = list_items[item];
            return(
              <li key={index} className={"col-8 col-sm-6 col-xs-12"}>
                <div className={"adv-wrap-item"}>
                  <span className={"icon " + _item.icon}/>
                  <h4>{_item.title}</h4>
                  <p>{_item.text}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}