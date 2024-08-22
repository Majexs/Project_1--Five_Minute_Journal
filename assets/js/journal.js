/*color palette*/
:root {
  --daisy: #E9E7DA;
  --light-daisy: #F2F1EC;
  --gold: #CDA34F;
  --stem: #636B46;
  --greenery: #373F27;
  --grid-cols: 1;
  --grid-rows: 1;
}


/* Added image background to landing page*/
body {
  width: 100%;
  margin: 0 auto; 
  padding: 0;
  height: 100vh; /* Full viewport height */
  background-color: var(--daisy);
  color: var(--greenery);
}
/* end of image background */
.title{
  width:fit-content;
}


:root {
  --grid-cols: 1;
  --grid-rows: 1;
  padding-block:10px 20px;
}

#daily_tracker {
  display: grid;
  grid-template-rows: repeat(var(--grid-rows), 1fr);
  grid-template-columns: repeat(var(--grid-cols), 1fr);
}

.grid-item {
  padding: .25em;
  border: 1px solid #0c0b0b;
  text-align: center;

}

.list-of-habits {
  list-style-type: none;
}


.container{
  width: 80%;
  margin: 0 auto; 
}



.OnDisplay{
  display:block;
}

.OffDisplay{
  display: none;
}


.quoteCard{
  text-align: center;
}

.popUpStyle{
  background-color: #fffbef;
  height: 100vh;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qoutehold{
  border: 1px solid black;
  border-radius: 50px;
  padding: 40px;
  font-family: Arial, Helvetica, sans-serif;
}

.qoutehold p{
  font-size:18px;
  
}

.qoutehold h5{
  margin: 10px 0 20px 0;
}



header {
  background-color: var(--gold);
  color: var(--greenery);
  text-align: center;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background-image: url('../images/flowerpic3.png');
  background-repeat: repeat-y;
  background-size: 100% auto;
  z-index: 2;
  border-right: 4px solid var(--stem);
}

h3 {
  color: var(--greenery);
}

.timer-container {
  position: absolute;
  right: 10px;
  background-color: var(--stem);
  color: var(--daisy);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
}

.form-custom-style {
  background-color: var(--light-daisy);
  color: var(--greenery);
  border: 1.5px solid var(--gold);
  padding: 20px;
  border-radius: 10px;

}

.btn-custom {
  background-color: var(--stem);
  color: var(--light-daisy);
  border: none;
}

