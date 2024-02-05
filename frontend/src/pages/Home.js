import React from 'react';
import '../home.css'; // Assuming you have a CSS file for styling
import image1 from '../images/image1.jpg'; // Assuming you have images in the images folder
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="image-collage">
                <img src={image1} alt="" className="collage-image"/>
                <img src={image2} alt="" className="collage-image"/>
                <img src={image3} alt="" className="collage-image"/>
                <h2>Welcome to the Student Management System</h2>
            </div>
            <div className="paragraph-container">
                <p className="side-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ipsum ultrices, laoreet eros nec, mattis felis. Aenean porttitor dolor eget nisi ultrices, quis suscipit nulla ultricies. Donec in dictum nulla, at ultrices ipsum. Sed vitae sem feugiat, cursus eros in, consequat urna. Sed nunc purus, pellentesque non mauris quis, convallis auctor quam. Sed maximus vulputate elit eget efficitur. Curabitur condimentum ullamcorper lectus sit amet euismod. Duis sit amet sapien quis nibh blandit finibus. Vestibulum ut lacinia felis. Morbi consectetur odio rhoncus, facilisis dolor in, ullamcorper quam. Vivamus malesuada massa ac justo commodo, sed pretium risus volutpat. Aenean vehicula dignissim nisl, sollicitudin elementum urna vestibulum sit amet.</p>
                <p className="side-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et libero sollicitudin, luctus eros nec, rutrum turpis. Morbi fermentum sem ut sagittis porta. Aenean aliquet tempor feugiat. Nulla rhoncus dignissim orci, nec laoreet magna iaculis eget. Pellentesque at sem enim. Quisque dapibus dictum tincidunt. Ut fringilla tellus sed lacus mattis, eu hendrerit sapien porta. Maecenas rhoncus diam vel ornare accumsan. Nulla a dapibus elit, aliquet feugiat nibh. Maecenas eget convallis turpis, et mattis lectus. Vivamus interdum mi eros, vitae sodales dui porta at. Aliquam iaculis metus in massa mollis, eget ultricies justo consequat. Pellentesque euismod sodales mi vel congue.</p>
            </div>
        </div>
    );
}

export default Home;
