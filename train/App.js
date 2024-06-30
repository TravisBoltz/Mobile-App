import { ScrollView, Text, View, Image,  } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    //View Component
    <View style={{ flex: 1, backgroundColor: "plum" ,padding:60}}>
    <ScrollView>
      {/* Image component
     <Image source={logoImg} style={{width: 300, height: 300}} />
     <Image source={{uri: 'http://picsum.photos/300'}} style={{width: 300, height: 300}} /> */}
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        justo vel tincidunt vestibulum, odio libero tincidunt quam, vel lacinia
        nunc elit vel justo. Nullam nec nunc id libero facilisis tincidunt.
        Nulla facilisi. Sed euismod, justo vel tincidunt vestibulum, odio libero
        tincidunt quam, vel lacinia nunc elit vel justo. Nullam nec nunc id
        libero facilisis tincidunt. Nulla facilisi.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        justo vel tincidunt vestibulum, odio libero tincidunt quam, vel lacinia
        nunc elit vel justo. Nullam nec nunc id libero facilisis tincidunt.
        Nulla facilisi. Sed euismod, justo vel tincidunt vestibulum, odio libero
        tincidunt quam, vel lacinia nunc elit vel justo. Nullam nec nunc id
        libero facilisis tincidunt. Nulla facilisi.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        justo vel tincidunt vestibulum, odio libero tincidunt quam, vel lacinia
        nunc elit vel justo. Nullam nec nunc id libero facilisis tincidunt.
        Nulla facilisi. Sed euismod, justo vel tincidunt vestibulum, odio libero
        tincidunt quam, vel lacinia nunc elit vel justo. Nullam nec nunc id
        libero facilisis tincidunt. Nulla facilisi.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        justo vel tincidunt vestibulum, odio libero tincidunt quam, vel lacinia
        nunc elit vel justo. Nullam nec nunc id libero facilisis tincidunt.
        Nulla facilisi. Sed euismod, justo vel tincidunt vestibulum, odio libero
        tincidunt quam, vel lacinia nunc elit vel justo. Nullam nec nunc id
        libero facilisis tincidunt. Nulla facilisi.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        justo vel tincidunt vestibulum, odio libero tincidunt quam, vel lacinia
        nunc elit vel justo. Nullam nec nunc id libero facilisis tincidunt.
        Nulla facilisi. Sed euismod, justo vel tincidunt vestibulum, odio libero
        tincidunt quam, vel lacinia nunc elit vel justo. Nullam nec nunc id
        libero facilisis tincidunt. Nulla facilisi.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        justo vel tincidunt vestibulum, odio libero tincidunt quam, vel lacinia
        nunc elit vel justo. Nullam nec nunc id libero facilisis tincidunt.
        Nulla facilisi. Sed euismod, justo vel tincidunt vestibulum, odio libero
        tincidunt quam, vel lacinia nunc elit vel justo. Nullam nec nunc id
        libero facilisis tincidunt. Nulla facilisi.
      </Text>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
