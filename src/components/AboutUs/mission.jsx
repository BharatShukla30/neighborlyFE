import maskGroup from '../../assets/AboutUs/Mask Group.svg'
import maskGroup2 from '../../assets/AboutUs/Mask group2.svg'
const Mission = () => {
    return (
        <div >
            <div className='flex justify-around my-10 max-[820px]:mx-16 max-[430px]:flex-col-reverse'>
                <div className='flex flex-col'>
                    <h2 className='text-4xl font-bold text-[#0A2540] mb-6 max-lg:text-3xl max-[820px]:text-2xl'>Our Story</h2>
                    <p className='inline-block
                     w-[455px] text-2xl max-lg:text-xl max-[820px]:text-xs max-[820px]:pr-52 max-[430px]:pr-0 max-[430px]:w-[302px]'>At Neighborly, our mission is to foster strong, connected communities by providing a platform that brings people together. We believe in the power of local connections and aim to create a space where neighbors can share, communicate, and support each other.</p>
                </div>
                <img src={maskGroup} alt="maskGroup" className='max-lg:max-h-80 max-[820px]:max-h-60'/>
            </div>


            <div className='flex justify-around my-10 max-[430px]:flex-col'>
                <img src={maskGroup2} alt="maskGroup" className='max-lg:max-h-80 max-[820px]:max-h-60' />
                <div className='flex flex-col max-[820px]:pl-20'>
                    <h2 className='text-4xl font-bold text-[#0A2540] mb-6 max-lg:text-3xl max-[820px]:text-2xl '>Our Mission</h2>
                    <p className='inline-block
                     w-[455px] text-2xl max-lg:text-xl max-[820px]:text-xs max-[820px]:max-w-60'>Neighborly was founded with the idea that technology can help bridge the gap between people in a community. In a world where digital interactions often replace face-to-face communication, we wanted to create an app that encourages real-world connections and strengthens neighborhood bonds.</p>
                </div>
            </div>



        </div>
    );
}
 
export default Mission;