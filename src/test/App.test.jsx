import {render,screen,act,waitFor} from '@testing-library/react'
import App from '../App'
import {expect,describe,it} from 'vitest'
import { vi } from 'vitest';
import axios from 'axios'

//vi.mock("axios");


describe('App.jsx',()=>{
    it('a projekt létrejött',()=>{
        render(<App/>)
        const titleElement=screen.getByText(/quiz game/i)
        expect(titleElement).toBeInTheDocument()
    })

    /*it("Should return valid value", async () => {
        console.log(axios);
      });*/
})