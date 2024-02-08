import { ReactElement, useRef, useState } from "react"
// Images Components
import ExportPhone from "./ImagesComponents/exportPhone.png"
import ScanPhone from "./ImagesComponents/scanPhone.png"
import SignStampPhone from "./ImagesComponents/signStampPhone.png"
import BatchPhone from "./ImagesComponents/batchPhone.png"
import AdvancedPhone from "./ImagesComponents/advancedPhone.png"
import ImageTemplate from "./ImagesComponents/ImagesTemplate"
// SVGs
import ExportSVG from "../assets/1.svg"
import AdvancedFilterSVG from "../assets/2.svg"
import BatchScanning from "../assets/3.svg"
import DocumentScanner from "../assets/4.svg"
import SignAndStamp from "../assets/5.svg"
import Icon from "./Icon"

// PageContent Template
import PageContent from "./PageContent"

interface ListItemInterface {
    name: string,
    icon: string,
    active: boolean,
    content: ReactElement
}

const PageContents = [
    {
        title: "Document Scanner",
        image: <ImageTemplate imgUrl={ScanPhone} />,
        lowerTitle: "Scan with Ease",
        description: "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
    },
    {
        title: "Sign & Stamp",
        image: <ImageTemplate imgUrl={SignStampPhone} />,
        lowerTitle: "One-Tap Focus",
        description: "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
    },
    {
        title: "Batch Scanning",
        image: <ImageTemplate imgUrl={BatchPhone} />,
        lowerTitle: "Multiple Page Scan",
        description: "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
    },
    {
        title: "Advanced filters",
        image: <ImageTemplate imgUrl={AdvancedPhone} />,
        lowerTitle: "Unique Filters",
        description: "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
    },
    {
        title: "export & share",
        image: <ImageTemplate imgUrl={ExportPhone} />,
        lowerTitle: "All-Round Conversion",
        description: "Export your scans as PDF,JPG,ZIP,TXT and Word."
    },

]

const listItems = [
    {
        name: "Document Scanner",
        icon: DocumentScanner,
        active: true,
        content: <div>Document Scanner</div>
    },
    {
        name: "Sign & Stamp",
        icon: SignAndStamp,
        active: false,
        content: <div>Sign & Stamp</div>
    },
    {
        name: "Batch Scanning",
        icon: BatchScanning,
        active: false,
        content: <div>Batch Scanning</div>
    },
    {
        name: "Advanced Filters",
        icon: AdvancedFilterSVG,
        active: false,
        content: <div>Advanced Filters</div>
    },
    {
        name: "Export & Share",
        icon: ExportSVG,
        active: false,
        content: <div>Export & Share</div>
    },
]

const PageOne = () => {
    const [children, setChildren] = useState(listItems[0].content)
    const [currentTab, setCurrentTab] = useState<ListItemInterface>(listItems[0])

    const initializedRef = useRef(false)

    const updateComponents = (): void => {
        PageContents.map((item, index) => {
            listItems[index].content = <PageContent
                key={index}
                title={item.title}
                imageComponent={item.image}
                lowerTitle={item.lowerTitle}
                description={item.description}
            />
        })
    }

    // Initialize Re-Usable Components with only data they have
    if (!initializedRef.current) {
        initializedRef.current = true
        updateComponents()

    }

    // Handling selected tabs and components
    const handleSelectedTab = (beforeTab: ListItemInterface, selectedTab: ListItemInterface) => {
        beforeTab.active = false;
        selectedTab.active = true;
        setChildren(selectedTab.content)
        setCurrentTab(selectedTab)
    }

    return (
        <div className="w-full bg-white">
            {children || null}
            <div className="w-full overflow-x-auto ">
                <div className="flex justify-start">
                    {
                        listItems.map((listItem, index) =>
                            <div onClick={() => { handleSelectedTab(currentTab, listItem) }} key={index}
                                className={`flex-grow
                                        px-[44px]
                                    hover:border-[#0381FF] transition-all border py-[34px] cursor-pointer 
                                    ${listItem.active ? 'bg-[#0381FF]/[3%]' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <Icon icon={listItem.icon} active={listItem.active || false} />
                                    <div className="font-medium text-nowrap text-xl text-left text-[#0B172A] ">
                                        {listItem.name}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


export default PageOne