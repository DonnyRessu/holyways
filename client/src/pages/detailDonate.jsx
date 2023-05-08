import { Link, useNavigate, useParams } from 'react-router-dom'
import fotoDetailDonate from '../images/fotoDetailDonate.png'
import { useMutation, useQuery } from 'react-query';
import { API } from '../config/api';
import { useEffect, useState } from 'react';

const DetailDonate = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const [form, setForm] = useState({
        total: "",
        donation_id: "",
      });
    
      const handleOnChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
      let { data: funderbydonation } = useQuery(
        "funderBydonationAndStatusSuccess",
        async () => {
          const response = await API.get(
            `/funder-by-donation-and-status-succes/${id}`
          );
          setData(response.data.data);
          return response.data.data;
        }
      );

    const { data: detailDonation } = useQuery("donationDetailCache", async () => {
        const response = await API.get(`/donation/${id}`)
        console.log(response.data.data)
        return response.data.data
    })
    console.log('JEMBUTTT ', detailDonation)

    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = import.meta.env
          .VITE_REACT_APP_MIDTRANS_CLIENT_KEY;
    
        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    
        document.body.appendChild(scriptTag);
        return () => {
          document.body.removeChild(scriptTag);
        };
      }, []);
    
      const handleDonate = useMutation(async (e) => {
        try {
          e.preventDefault();
    
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const data = {
            total: Number(form.total),
            donation_id: Number(id),
          };
    
          const body = JSON.stringify(data);
          console.log(body);
    
          const response = await API.post("/transaction", body, config);
          console.log("donation success :", response);
    
          const token = response.data.data.token;
    
          window.snap.pay(token, {
            onSuccess: function (result) {
              /* You may add your own implementation here */
              console.log(result);
              navigate("/profile");
            },
            onPending: function (result) {
              /* You may add your own implementation here */
              console.log(result);
              navigate("/profile");
            },
            onError: function (result) {
              /* You may add your own implementation here */
              console.log(result);
              navigate("/profile");
            },
            onClose: function () {
              /* You may add your own implementation here */
              alert("you closed the popup without finishing the payment");
            },
          });
        } catch (error) {
          console.log("donation failed : ", error);
        }
      });

    return (
        <div className="bg-slate-100 h-full pb-10">
            <div className="flex w-2/3 mx-auto justify-between pt-10 gap-10">
                <div>
                    <img className='w-[700px]' src={detailDonation?.image} />
                </div>
                <div>
                    <h1 className='text-black font-bold text-xl'>{detailDonation?.title}</h1>
                    <p className='pt-10'><span className='text-red-500'>Rp 25.000.000</span> Gathered From <span>Rp {detailDonation?.goal}</span></p>
                    <progress className="progress progress-error w-80" value="40" max="100"></progress>
                    <div className='flex justify-between pb-7'>
                        <div>
                            <p className='text-black'><span className='font-bold'>200</span> Donation</p>
                        </div>
                        <div >
                            <p className='pr-32 text-black'><span className='font-bold'>150</span> More Day</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-justify'>{detailDonation?.description}</p>
                    </div>
                    {/* <div className='pt-4'>
                        <button className='bg-red-600 w-full rounded py-1 text-white'>Donate</button>
                    </div> */}

                    <label
                        htmlFor="my-modal-donate"
                        className="btn bg-red-700 w-full text-white font-semibold p-2 rounded-md text-center border-none hover:bg-red-900 hover:text-white mr-4">
                        Donate
                    </label>

                    <input
                        type="checkbox"
                        id="my-modal-donate"
                        className="modal-toggle"
                    />
                    <label htmlFor="my-modal-donate" className="modal cursor-pointer">
                    <label
                        className="modal-box relative bg-white text-black max-w-xs"
                        htmlFor="">
                    <h1 className="font-bold text-2xl mb-2 text-gray-800">Nominal</h1>
                    <form onSubmit={(e) => handleDonate.mutate(e)}>
                    <input
                    onChange={handleOnChange}
                    name="total"
                    value={form.total}
                    style={{ backgroundColor: "#D2D2D240" }}
                    type="number"
                    placeholder="Nominal Donation"
                    className="text-gray-600 input input-bordered w-full max-w-xs mb-3"
                    />

                {/* {message && message} */}

                <button
                  type="submit"
                  className="mt-7 btn bg-red-700 w-full text-white font-semibold p-2 rounded-md text-center border-none hover:bg-red-900 hover:text-white mr-4"
                >
                  Donate
                </button>
              </form>
            </label>
          </label>


                </div>
            </div>
            <div className='w-2/3 mx-auto pt-10'>
                <h1 className='text-2xl font-bold text-black'>List Donation (200)</h1>
                <div className='bg-white px-2 py-2 mt-5'>
                    <p className='text-black font-bold'>Andi</p>
                    <p className='text-black'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                    <p className='text-red-500'>Total : Rp 45.000</p>
                </div>
                <div className='bg-white px-2 py-2 mt-2'>
                    <p className='text-black font-bold'>Jamal</p>
                    <p className='text-black'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                    <p className='text-red-500'>Total : Rp 45.000</p>
                </div>
                <div className='bg-white px-2 py-2 mt-2'>
                    <p className='text-black font-bold'>Udin</p>
                    <p className='text-black'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                    <p className='text-red-500'>Total : Rp 45.000</p>
                </div>
            </div>
        </div>
    )
}

export default DetailDonate