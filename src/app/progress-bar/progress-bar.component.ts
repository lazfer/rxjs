import { Component, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const texto = document.createElement('div');
    texto.innerHTML = `
    Natus fugit aspernatur consequatur minus quod optio doloribus necessitatibus eaque minima, dignissimos neque suscipit tenetur esse ducimus quis perferendis hic quas quo? Alias dolorum impedit blanditiis adipisci fugit. Exercitationem, tenetur!
<br/>
    Pariatur quos, cum officia corporis, illo blanditiis enim qui possimus exercitationem mollitia minus voluptatum molestias, eligendi velit eum aspernatur quae. Autem veritatis delectus tempore voluptatum! Voluptates harum minima iste sequi.
<br/>
    Ad cum natus, nulla ex dignissimos quae deserunt repellendus, iusto amet facere ipsam reiciendis eaque, ipsum ullam! Voluptatibus, obcaecati aliquid alias quos animi dolore repellendus ea adipisci eaque omnis consequuntur!
<br/>
    Obcaecati molestiae nesciunt minima consectetur sed cum ipsa, ullam architecto veniam delectus amet reiciendis dignissimos libero laborum dolor accusantium at debitis, quia tenetur perspiciatis corporis quis repellendus ipsum aliquam! Quam.
<br/>
    Reprehenderit dignissimos facilis ipsum rem voluptatum expedita nobis quisquam aspernatur nihil provident, reiciendis eum fugiat minus, quidem soluta a possimus corrupti mollitia debitis deleniti. Autem eius nostrum quaerat voluptates ratione.
<br/>
    Distinctio, corrupti tempore voluptates quos voluptate ab velit est ipsum sit illum blanditiis porro, assumenda labore. Blanditiis sit corrupti totam adipisci corporis, natus commodi, consequuntur dicta explicabo fugiat repellat alias?
<br/>
    Voluptate laboriosam amet minus magni voluptatum. Quisquam esse ducimus explicabo, distinctio doloremque consectetur velit, cupiditate cum error, fugit est voluptas voluptate reprehenderit exercitationem asperiores voluptatum quo. Atque odit sequi officia.
<br/>
    Ducimus porro cum fugit, voluptas accusantium unde dicta vero saepe maiores quam itaque ipsa officia, asperiores suscipit eveniet rerum! Labore accusamus, eligendi eos officiis obcaecati quod rerum maxime. Recusandae, velit.
<br/>
Maxime consequatur labore voluptates vel assumenda porro aspernatur laudantium vitae tempore illo. Impedit et, enim veniam saepe quidem reiciendis eos deserunt sit tempore iure corporis temporibus exercitationem provident incidunt accusamus?
<br/>
    Ducimus porro cum fugit, voluptas accusantium unde dicta vero saepe maiores quam itaque ipsa officia, asperiores suscipit eveniet rerum! Labore accusamus, eligendi eos officiis obcaecati quod rerum maxime. Recusandae, velit.
<br/>
Maxime consequatur labore voluptates vel assumenda porro aspernatur laudantium vitae tempore illo. Impedit et, enim veniam saepe quidem reiciendis eos deserunt sit tempore iure corporis temporibus exercitationem provident incidunt accusamus?
<br/>`;

const body = document.querySelector('body');
(<any>body).append(texto);

const progreso = document.createElement('div');
progreso.setAttribute('class','progress-bar');
(<any>body).append(progreso);  

const calculo = (event) => {
const {scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent(document,'scroll').pipe(
map( event => calculo(event)),
tap( console.log)
)

scroll$.subscribe(
  porcentaje => {
    progreso.style.width = `${porcentaje}%`;
  } 
);

}

  

}
