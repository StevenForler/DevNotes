import DropdownBox from './components/dropdownbox';

function App() {
  const dropdownData = [
    { id:0,
      title: "About Dogs",
      items: [
        "Dogs are loyal",
        "Dogs love humans",
        "Dogs need exercise"
      ]
    },
    { id:1,
      title: "About Cats",
      items: [
        "Cats are curious",
        "Cats love to climb",
        "Cats sleep a lot"
      ]
    },
    { id:2,
      title: "About Birds",
      items: [
        "Birds can fly",
        "Birds sing songs",
        "Birds build nests"
      ]
    }
  ];

  return (
    <div>
      <h1>Animals Dropdowns</h1>

      {dropdownData.map(({title,items}, id) => (
        <DropdownBox
          key={id}
          title={title}
          items={items}  // pass list of unique items
        />
      ))}
    </div>
  );
}

export default App;