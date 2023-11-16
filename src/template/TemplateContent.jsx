import React from 'react'

function TemplateContent() {
  return (<>
  <>
  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 1100 }}>
    {/* About Section */}
    <div className="w3-row w3-padding-64" id="about">
      <div className="w3-col m6 w3-padding-large w3-hide-small">
        <img
          src="https://www.w3schools.com/w3images/tablesetting2.jpg"
          className="w3-round w3-image w3-opacity-min"
          alt="Table Setting"
          width={600}
          height={750}
        />
      </div>
      <div className="w3-col m6 w3-padding-large">
        <h1 className="w3-center">About Catering</h1>
        <br />
        <h5 className="w3-center">Tradition since 1889</h5>
        <p className="w3-large">
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
          sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only
          use <span className="w3-tag w3-light-grey">seasonal</span>{" "}
          ingredients.
        </p>
        <p className="w3-large w3-text-grey w3-hide-medium">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod temporincididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <hr />
    {/* Menu Section */}
    <div className="w3-row w3-padding-64" id="menu">
      <div className="w3-col l6 w3-padding-large">
        <h1 className="w3-center">Our Menu</h1>
        <br />
        <h4>Bread Basket</h4>
        <p className="w3-text-grey">
          Assortment of fresh baked fruit breads and muffins 5.50
        </p>
        <br />
        <h4>Honey Almond Granola with Fruits</h4>
        <p className="w3-text-grey">
          Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
        </p>
        <br />
        <h4>Belgian Waffle</h4>
        <p className="w3-text-grey">
          Vanilla flavored batter with malted flour 7.50
        </p>
        <br />
        <h4>Scrambled eggs</h4>
        <p className="w3-text-grey">
          Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
        </p>
        <br />
        <h4>Blueberry Pancakes</h4>
        <p className="w3-text-grey">
          With syrup, butter and lots of berries 8.50
        </p>
      </div>
      <div className="w3-col l6 w3-padding-large">
        <img
          src="https://www.w3schools.com/w3images/tablesetting.jpg"
          className="w3-round w3-image w3-opacity-min"
          alt="Menu"
          style={{ width: "100%" }}
        />
      </div>
    </div>
    <hr />
    {/* Contact Section */}
    <div className="w3-container w3-padding-64" id="contact">
      <h1>Contact</h1>
      <br />
      <p>
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="w3-text-blue-grey w3-large">
        <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
      </p>
      <p>
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>
      <form action="/action_page.php" target="_blank">
        <p>
          <input
            className="w3-input w3-padding-16"
            type="text"
            placeholder="Name"
            required=""
            name="Name"
          />
        </p>
        <p>
          <input
            className="w3-input w3-padding-16"
            type="number"
            placeholder="How many people"
            required=""
            name="People"
          />
        </p>
        <p>
          <input
            className="w3-input w3-padding-16"
            type="datetime-local"
            placeholder="Date and time"
            required=""
            name="date"
            defaultValue="2020-11-16T20:00"
          />
        </p>
        <p>
          <input
            className="w3-input w3-padding-16"
            type="text"
            placeholder="Message \ Special requirements"
            required=""
            name="Message"
          />
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-section" type="submit">
            SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
    {/* End page content */}
  </div>
</>

  </>
  )
}

export default TemplateContent