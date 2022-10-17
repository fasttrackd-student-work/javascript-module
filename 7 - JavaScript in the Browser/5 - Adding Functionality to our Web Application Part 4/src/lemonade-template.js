const createLemonadeDiv = ({ lemonJuice, water, sugar, ice, price }, idx) =>
  `<div class="lemonade">
    <div class="background small">
      <div class="glass-back small">
        <div class="glass-front small">
          <div
            id="lemonJuice"
            style="transform: translate(0px, ${calcPercent(
              lemonJuice.amount,
              lemonJuice.max
            )}%)"
          ></div>
          <div
            id="water"
            style="transform: translate(0px, ${calcPercent(
              water.amount,
              water.max
            )}%)"
          ></div>
          <div
            id="sugar"
            style="transform: translate(0px, ${calcPercent(
              sugar.amount,
              sugar.max,
              40
            )}%)"
          ></div>
          <div id="iceBox">
            ${Array(ice.amount)
              .fill(undefined)
              .map(
                (_) => '<img class="ice" src="../img/ice.svg" alt="Ice Cube" />'
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="lemonade-text">
      <span>Lemon Juice: ${lemonJuice.amount} ounces</span>
      <span>Water: ${water.amount} ounces</span>
      <span>Sugar: ${sugar.amount} tablespoons</span>
      <span>Ice: ${ice.amount} cubes</span>
      <span id="total">Price: $${price}</span>
    </div>
    <button id=${idx} class="remove">Remove</button>
  </div> `;
