import {loadEvents, loadConfig} from "../lib/data.js"
import FAQ from "../components/faq.js"
import Countdown from "../components/countdown"
import Hero from "../components/hero.js"
import Layout from "../components/layout.js"
import VenueMap from "../components/map.js"
import Teams from "../components/teams.js"
import ScheduleSection from '../components/scheduleSection.js';
import Resources from "../components/resources.js"
import Video from "../components/video.js"
import { HeaderCards } from "../components/event-card.js"

const headerCards = [
  {url:"https://fil-bangalore.io/", title:"FILBangalore", date:"Dec 3-Dec 4"},
  {url:"https://ethindia.co/", title:"ETHIndia", date:"Dec 8-Dec 10"},
  {url:"https://ethglobal.com/events/pragma-india", title:"Pragma India", date:"Dec 7"},
]

export default function Index({ events, config }) {
  return (
    <Layout config={config}>
      {/* <Hero config={config} /> */}

      <div className="w-full flex flex-row flex-wrap mx-auto max-w-xl py-10 px-6 text-6xl lg:px-0">
        <p className="text-center">India <span className="italic pl-1">Blockchain</span> Week 2023</p>
      </div>
      
      <div className="w-full flex flex-row flex-wrap mx-auto max-w-6xl pb-10 px-6 lg:px-0">
        {headerCards.map((item, index)=>{
          return <HeaderCards key={index} {...item}/>
        })}
      </div>
      <ScheduleSection config={config} events={events} />
      {/* <Video src="https://www.youtube.com/embed/M5q5llrXl5I" />
      <Countdown targetDate={`${config?.devent?.dateStart} 01:00`} className="mt-28 -mb-10"  />
      <VenueMap />
      <Resources config={config} />
      <Teams config={config} />
      <FAQ config={config} /> */}
    </Layout>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  return {
    props: {
      events: await loadEvents(),
      config: await loadConfig(),
    }
  }
}

