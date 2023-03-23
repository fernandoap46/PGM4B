import '../playListPage/PlayList.css'
import React from 'react';
import Headers from '../../Headers';
import Carrossel from './PlaylistComponentes/Carrocel/Carrossel';
import { Form, FormGroup, Label, Input } from 'reactstrap';   
import CardLeft from './PlaylistComponentes/CardLeft/CardLeft'; 
import './PlayList.css';
import CardPlay from './PlaylistComponentes/CardPlayer/CardPlayer';
import CardRight from './PlaylistComponentes/CardRight/CardRigth';
import CarrosselB from './PlaylistComponentes/CarrosselB/CarrosselB';


function App() {
  return (
<div>
    <header>
      <Headers />
    </header> 
    <main>
       <Carrossel/> 

       <div class="textoPlaylist">
            <div class= "textplay">
                <h1>Favoritas</h1>
            </div>
            <div class= "input">
                <Form>
                    <FormGroup>
                        <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                    </FormGroup>
                </Form>
            </div>
            <div class="cardCentral">

                <div class="lateral">
                    <CardLeft/>
                </div>
                <div class="central">
                    <CardPlay/>
                </div>
                <div class="lateral">
                    <CardRight/>
                </div>

            </div>

            <div class="carrocelfooter">
                <CarrosselB/>
                <CarrosselB/>
                <CarrosselB/>
                <CarrosselB/>       
            </div> 

        </div>

    </main>


    



</div>
  );
}

export default App;
