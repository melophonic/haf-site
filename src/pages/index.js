import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/haf/01.png';
import pic2 from '../assets/images/haf/02.png';
import pic3 from '../assets/images/haf/03.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    
    <section id="banner">
    
      <div className="inner">
        <h2>What you long for longs for you</h2>
        <p>Rob Burbea</p>
      </div>
      <Scroll type="id" element="two">
        <a href="#two" className="more">
        </a>
      </Scroll>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight" id="spotlight-1">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
          Sed ut perspiciatis
          </h2>
          <p>
           Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          </p>
        </div>
      </section>
      <section className="spotlight" id="spotlight-2">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
          Neque porro quisquam est
          </h2>
          <p>
          Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </section>
      <section className="spotlight" id="spotlight-3">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
          Finibus Bonorum et Malorum
          </h2>
          <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
          Temporibus autem quibusdam          
          </h2>
          <p>
          Et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Eternality</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Love</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-leaf major style3">
              <span className="label">Beauty</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
          <input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
          </li>
					<li><input type="submit" value="Submit"  /></li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
