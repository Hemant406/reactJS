import React, { useRef } from 'react'
import { anticipate, motion, useScroll } from "motion/react";
const App = () => {
  const ref = useRef(null);
  const scrollYProgress = useScroll().scrollYProgress;
  return (
    <div className='container' ref={ref}>
      <motion.div
      // animate={{
      //   x:[0,1000,1000,0,0],
      //   y:[0,0,400,400,0],
      //   rotate:[0,360,-360,360,0]
      // }}
      // transition={{
      //   duration:6,
      //   delay:1,
      //   repeat:1,
      //   ease:anticipate,
      //   repeatType:"reverse",
        
      // }}
      className="box">

      </motion.div>

      <motion.div
      drag
      dragConstraints={ref}
      whileDrag={{
        scale:0.8,
      }}
      dragSnapToOrigin
      className='circle'>

      </motion.div>

      <motion.div
      style={{
        scaleX:scrollYProgress
      }}
      className='load'></motion.div>

      <h2>Hemant Pande is learning Framer motion</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias maxime, inventore nisi facere iste, asperiores eveniet quo obcaecati quae corrupti, earum aspernatur! Nihil voluptate libero deleniti ab ex laudantium, distinctio natus temporibus et, nisi sed? Neque fugit temporibus assumenda debitis unde sunt perferendis corporis reiciendis, eveniet, facere tempore nesciunt? Esse quae ipsa nulla soluta praesentium repellat, alias rem vel, atque reprehenderit aperiam tempora. Est, doloremque quidem? Suscipit atque alias, distinctio id sit minima natus laborum dolores tempore quibusdam. Vero placeat, esse repellendus enim, laudantium quod corporis atque similique labore distinctio, eius ex deleniti. Soluta optio deserunt repellat ut, nam natus fugiat dolor repellendus suscipit. Soluta reprehenderit laboriosam iure, repudiandae fugiat quos explicabo sint quod recusandae labore, debitis eveniet. Tenetur, corporis! Vel pariatur maiores est hic voluptate, earum blanditiis esse non praesentium qui dolore rem, quos exercitationem expedita nemo odio quod nostrum sequi consequatur doloremque nam deleniti. Soluta molestias quas, nesciunt rerum, voluptatibus quasi quod culpa libero expedita non ut nisi est voluptates. Ab natus dolorum incidunt. Id quas recusandae impedit magnam eaque? Recusandae corporis ut doloribus, rem necessitatibus modi fugiat quo consectetur eum cum minus maxime facilis quasi maiores? Praesentium quod tempora velit laboriosam rem nesciunt porro itaque accusamus dolore!</p>
    </div>
  )
}

export default App
