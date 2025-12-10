// const { todos, selectedTab, setSelectedTab } = props

export default function Test({buttonInfo}) {
const [{text1, text2,text3, text4}] = buttonInfo

    return (
        <div>
            <button>{text1} </button>
            <button>{text2} </button>
            <button>{text3} </button>
            <button>{text4} </button>
        </div>
)
}
