import React from "react";

export default function OurAdvantages(props) {

  const list_items = [
    {
      icon: "beautiful",
      title: "SLICK DESIGN",
      text: "Beautifully designed with care throughout the app from your bucket list to your profile page."
    },
    {
      icon: "easy",
      title: "EASY TO USE",
      text: "With our easy-to-use user interface, technology is no longer in the way of you living your life."
    },
    {
      icon: "social",
      title: "SOCIAL SHARING",
      text: "Sharing your achievements to your Twitter and Facebook is just a click away."
    },
    {
      icon: "community",
      title: "COMMUNITY",
      text: "With our community driven platform, connecting with like-minded people has never been easier."
    },
    {
      icon: "privacy",
      title: "PRIVACY",
      text: "Not feeling social? You can hide goals or make your bucket list private entirely."
    },
    {
      icon: "timeline",
      title: "TIMELINE",
      text: "All your accumulated life achievements will be stored on your timeline page where you can look back at any time."
    }
  ];

  return(
    <div>
      <h2 className={"main-title"}>POWERFUL TOOLS FOR A POWERFUL LIFE</h2>
      <p className={"main-subtitle"}>Our bucket list app strikes the perfect balance between beauty, power and ease of use. We provide the most powerful tools to help you manage all your life goals without getting in the way and share your life stories the most elegant way possible.</p>
      <ul className={"row"}>

        {
          list_items.map((item, index) => {
            return(
              <li key={index} className={"col-8 col-sm-6 col-xs-12"}>
                <div className={"adv-wrap-item"}>
                  <span className={"icon " + item.icon}/>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}