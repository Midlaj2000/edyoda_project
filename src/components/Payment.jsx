import '../style/payment.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"




const Payment = () => {
  const [fee, setFee] = useState(0)
  const [val, setVal] = useState(0)
  const handleClick = (i, j) => {
    setFee(i)
    setVal(j)
  }

  return (
    <div className="payment">


      <div className="pricing_section">
        {/* Left section */}
        <div className="content_container">
          <div className="main_heading">
            <h1 className="heading">
              Access curated courses worth <br /><span className='cross-line'>₹ 18,500</span> at just <span className='blue'>₹99</span> per year!
            </h1>
          </div>

          <div className="content_wrap">
            <div className="content_line">
              <img className="left_icons" src='../images/book.png' alt="" />
              <p className="left_lines"><span className='blue'>100+</span> Job relevant courses </p>
            </div>

            <div className="content_line">
              <img className="left_icons" src='../images/clock.png' alt="" />
              <p className="left_lines"><span className='blue'>20,000+</span> Hours of content </p>
            </div>

            <div className="content_line">
              <img className="left_icons" src='../images/radio.png' alt="" />
              <p className="left_lines"><span className='blue'>Exclusive</span> webinar access</p>
            </div>

            <div className="content_line">
              <img className="left_icons" src='../images/cap.png' alt="" />
              <p className="left_lines">Scholarship worth <span className='blue'>₹94,500</span></p>
            </div>

            <div className="content_line">
              <img className="left_icons" src='../images/ads.png' alt="" />
              <p className="left_lines"><span className='blue'>Ad Free</span> learning experience</p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        
        <div className="rightblock">
          <div>
            <div className="top">
              <div className="new">
                <img className="onetwo_img" src='../images/Icon1.png' alt="" />
                <p className="oneTwoP">Sign Up</p>
              </div>
              <div className="new">
                <img className="onetwo_img" src='../images/Icon2.png' alt="" />
                <p className="oneTwoP">Subscribe</p>
              </div>
            </div>
            
            <h3>Select your subscription plan</h3>

            {/* plans */}
            <div id="planWrap">
              <div className="plan1" id="disable">
                <div className="pleft">
                  <input type="radio" disabled checked={true} onClick={() => handleClick('99', '18500')} />
                  <div id="p12"><b>12 Months Subscription</b></div>
                </div>
                <div className="pright">
                  <div> <span id="total">Total</span>  <FontAwesomeIcon icon={faIndianRupeeSign} />99</div>

                  <div> <span id="perMo"><FontAwesomeIcon icon={faIndianRupeeSign} />33</span> <span id="month">/mo</span> </div>
                </div>
              </div>
            </div>

            <div className="plan1">
              <div className="pleft">
                <input type="radio" name="tick" onClick={() => handleClick('179', '18580')} />
                <div id="p12"><b>12 Months Subscription</b></div>
              </div>
              <div className="pright">
                <div> <span id="total">Total</span>  <FontAwesomeIcon icon={faIndianRupeeSign} />179</div>

                <div> <span id="perMo"><FontAwesomeIcon icon={faIndianRupeeSign} />33</span> <span id="month">/mo</span> </div>
              </div>
            </div>
            <div className="plan1">
              <div className="pleft">
                <input type="radio" name="tick" onClick={() => handleClick('149', '18550')} />
                <div id="p12"> <b>6 Months Subscription</b> </div>
              </div>
              <div className="pright">
                <div> <span id="total">Total</span>  <FontAwesomeIcon icon={faIndianRupeeSign} />149</div>

                <div> <span id="perMo"><FontAwesomeIcon icon={faIndianRupeeSign} />33</span> <span id="month">/mo</span> </div>
              </div>
            </div>
            <div className="plan1">
              <div className="pleft">
                <input type="radio" name="tick" onClick={() => handleClick('99', '18500')} />
                <div id="p12"><strong>3 Months Subscription</strong>
                </div>
              </div>
              <div className="pright">
                <div> <span id="total">Total</span>  <FontAwesomeIcon icon={faIndianRupeeSign} />99</div>

                <div> <span id="perMo"><FontAwesomeIcon icon={faIndianRupeeSign} />33</span> <span id="month">/mo</span> </div>
              </div>
            </div>


            {/* total */}
            <hr />
            <div className="amt"> Subscription Fee
              <span><FontAwesomeIcon icon={faIndianRupeeSign} />{val}</span>
            </div>

            {/* offer */}

            <div className="offer">
              <div className="offerL">
                <div id="offerTxt"> <b>Limited time offer</b> </div>
                <div id="offerValid"><img src='../images/Icon Clock.png' alt="clock" width={15} /> <span>Offer valid till 25th March 2023</span> </div>
              </div>
              <div className="offerR">
                <div>-<FontAwesomeIcon icon={faIndianRupeeSign} />18,401 </div>
              </div>
            </div>
          </div>

          <div className="amt">
            <div><b>Total</b> (Incl.of 18% GST)</div>
            <span id="totalAmt"><FontAwesomeIcon icon={faIndianRupeeSign} /> <b>{fee}</b> </span>
          </div>
          <div className="btns">
            <button type="button" id="cancel" >CANCEL</button>
            <button id="pay">PROCEED TO PAY</button>

          </div>
          <img id="razor" src='../images/razorpay.png' alt="sticker" width={70} />
        </div>

      </div>
    </div>
  )

}
export default Payment