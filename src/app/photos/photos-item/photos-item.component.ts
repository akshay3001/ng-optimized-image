import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Photo } from '../shared/models/photos.model';

@Component({
  selector: 'app-photos-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <img
      [ngSrc]="photo.url"
      width="600"
      height="600"
      [alt]="photo.title"
      [priority]="index === 0 || index === 1"
    />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita id
      totam deleniti, sit qui officiis praesentium modi quis eius sapiente
      voluptatem numquam! Similique autem dicta vitae, aspernatur aperiam animi
      commodi ipsa tempore architecto sit, nesciunt doloribus cum. Debitis saepe
      atque quis facere iusto magni, doloremque nemo similique. Sapiente
      laboriosam numquam repellat aperiam sit minima perferendis quia nam modi
      similique repudiandae expedita voluptatibus, nulla asperiores eveniet
      nihil minus quis nostrum quisquam dolore accusantium cumque aliquam,
      veritatis distinctio. Impedit perferendis consequuntur asperiores autem a
      odit dolore voluptatibus tempore! Sequi inventore autem quis laborum earum
      necessitatibus corrupti molestiae, minima quam ex dicta maiores enim
      veritatis praesentium, repellendus, officia perferendis sint nulla dolor.
      Voluptatum deserunt harum aliquid. Officia, voluptatibus sunt nobis, quas
      expedita similique nulla, dolor nemo sapiente omnis id provident!
      Provident veniam minima id sapiente nihil, ullam non quam aut quasi
      consequatur ex amet quaerat, adipisci ipsa inventore eos distinctio dolor
      ab suscipit quidem placeat labore laborum similique dolores. Amet hic
      reprehenderit voluptatum earum iste tempora provident eius debitis
      similique quasi. Unde aut incidunt cumque velit molestiae impedit, non
      nulla dolor aliquam laborum animi at. Vero, necessitatibus quia ducimus
      velit tempore rerum repellendus optio perferendis vel quis nemo mollitia
      facilis autem laudantium nisi cupiditate nostrum. Blanditiis, obcaecati
      nulla? Dolorum, velit magni, itaque dignissimos excepturi voluptas cumque
      eum officiis aliquid, alias impedit earum quas. Dolorum fugit quo
      architecto nostrum odio necessitatibus quae, corporis provident.
      Quibusdam, architecto tenetur voluptatum nostrum quos aliquam praesentium
      in totam amet nam optio quae hic unde, excepturi aut exercitationem
      voluptates, deleniti adipisci quidem. Eos aliquid, veritatis optio sit
      accusamus libero, quo fugiat alias nisi velit eum tenetur quis beatae quod
      commodi repellat. In quaerat delectus sapiente quisquam quasi, hic ex
      voluptate possimus optio nesciunt veniam saepe ipsum corrupti reiciendis
      tempora consequuntur voluptatibus doloremque inventore eligendi ducimus,
      excepturi rerum corporis eveniet? Nisi voluptate quos aliquam facilis
      maxime ipsum, assumenda odio consequatur provident voluptatum deleniti ex
      optio dolores doloribus, consequuntur quisquam deserunt consectetur non
      sed delectus in nihil. Beatae facere ullam accusantium omnis quis amet
      commodi praesentium perferendis dolorem, fuga adipisci corrupti quidem
      cupiditate quod minima maiores quos inventore ipsum dignissimos
      repudiandae. Dicta optio culpa mollitia distinctio illum expedita adipisci
      temporibus laborum magnam voluptas, facilis soluta earum animi cupiditate
      eaque maiores illo dolorum. Maxime illo cum optio, dolores ipsa molestias
      ipsum architecto, blanditiis quaerat eos a laborum consequuntur nemo
      tempore explicabo! Consectetur quod, iste sapiente consequatur at ratione,
      suscipit beatae blanditiis numquam illum molestiae nulla itaque qui
      necessitatibus sequi eligendi maiores adipisci. Fugit vero possimus
      maiores hic voluptas incidunt culpa! Blanditiis, commodi. Deleniti
      necessitatibus veritatis distinctio magni reprehenderit quisquam suscipit
      maiores aperiam possimus, vero cum. Quam deleniti doloribus officia. Saepe
      possimus accusantium est porro animi perferendis dolorum fugiat itaque
      totam fugit eligendi id sequi numquam hic, vel omnis rem eos consectetur.
      Nesciunt impedit distinctio porro odit earum iste vitae neque delectus
      consequatur ea officiis vero aut sit voluptate et maiores velit amet, hic
      necessitatibus perspiciatis nisi facilis, nostrum saepe quas. Blanditiis,
      saepe? Nisi ab adipisci soluta amet ducimus totam ad vitae temporibus
      esse? Nesciunt, pariatur ad et quod vel deserunt aliquam qui ducimus
      tempore ut sequi quidem a dicta eum. Ut iste ullam corrupti dignissimos
      quam expedita illo libero magnam voluptatem optio voluptatum et alias
      dolor earum provident, aspernatur fugiat aliquid ipsam, accusantium neque
      velit cupiditate praesentium! Cum ipsam veritatis suscipit vel rem tempora
      doloribus explicabo eligendi excepturi omnis molestiae voluptatem quas,
      magni modi voluptate provident rerum? Atque, porro? A facere commodi
      voluptate molestias beatae quam eius neque atque, cumque ipsa repellendus
      nesciunt est sapiente vel dicta quas voluptatibus, accusamus quis labore
      excepturi, magni non eveniet. Deleniti delectus vitae dolore eveniet
      veritatis. Commodi neque, quibusdam perspiciatis aut ut incidunt a illo
      asperiores recusandae temporibus exercitationem porro qui officiis aliquid
      ea sapiente cum molestias inventore obcaecati quis! Quasi libero
      reiciendis repellendus hic, officia quisquam quam provident non
      accusantium doloremque velit! Fugit, veniam sapiente. Deleniti ex ipsa,
      atque omnis unde quae vel placeat cum in nemo suscipit veniam ad non. Esse
      ab minus dolorem error magnam? Ab voluptatibus maxime tenetur mollitia,
      rem ullam culpa veritatis fuga excepturi sit laborum! Quasi reiciendis
      esse quidem consequatur consequuntur illo culpa eveniet dolorem suscipit
      in perspiciatis numquam quod eligendi voluptas vero exercitationem ratione
      ducimus, qui minima adipisci, molestias facilis, delectus placeat?
      Molestias, vitae. Deleniti rem fugit dicta hic sunt, impedit aliquid
      quidem in id ullam sapiente, omnis ut optio eum perspiciatis! Eaque
      tempora ullam optio placeat facilis asperiores officiis perspiciatis?
      Nulla ipsa aliquid autem, corporis voluptas voluptates quam commodi. Unde
      provident blanditiis nam dignissimos similique architecto est dolores
      exercitationem, aliquam eum ab facere, nisi voluptatibus ea! Voluptates
      soluta sit nihil ex iusto architecto ducimus, assumenda reiciendis
      veritatis voluptas error aliquam in at autem? Perspiciatis iure quis fugit
      officiis, quos saepe, neque quae distinctio, cupiditate corrupti quisquam
      deleniti obcaecati beatae consequatur quas rem eum laboriosam voluptates
      aperiam id. Tempore repellendus totam dignissimos commodi? Porro
      necessitatibus placeat, saepe odio natus, repudiandae dolor veniam fuga
      impedit tenetur sit rem odit quaerat voluptas deserunt assumenda minus
      quibusdam voluptate eligendi sed soluta sint nesciunt rerum. Ullam
      repellat nisi veniam nobis? Praesentium assumenda sed quod! Tempore illum
      nisi cumque impedit, repudiandae inventore aliquam esse voluptas quia
      voluptate similique aliquid placeat in unde, deserunt voluptatem maiores
      velit nesciunt. Temporibus cum architecto voluptate repellat aliquid fuga
      dolore suscipit? Qui, explicabo, nostrum sapiente exercitationem sed enim
      id officia optio quae iure nobis ad necessitatibus veritatis aperiam iusto
      adipisci assumenda doloribus quo quas inventore, accusantium repellat vero
      fuga! Cum molestiae corporis assumenda dolorum nihil aperiam quos
      consequatur. Modi, nostrum? Suscipit dolorum, dignissimos eaque molestiae
      ex id sit atque, nesciunt quam itaque modi ab voluptatibus facilis
      asperiores vitae nulla dicta aliquid et a unde voluptas eos alias culpa.
      Dicta voluptate labore fugiat eligendi, blanditiis in at dolorum pariatur
      aut quas maxime nemo facilis hic sequi, quis voluptatum ratione illum
      eveniet repellat voluptatibus ipsa earum dolores adipisci. Libero pariatur
      assumenda aspernatur, et voluptatum quo vitae dicta exercitationem ex est
      nulla vero recusandae, dolorem commodi eos animi! Veniam eveniet
      voluptates qui ipsam doloribus beatae animi. Eos sunt laboriosam deserunt
      consequatur soluta?
    </p>
    <hr />
  `,
})
export class PhotosItemComponent {
  @Input() index!: number;
  @Input() photo!: Photo;
}
