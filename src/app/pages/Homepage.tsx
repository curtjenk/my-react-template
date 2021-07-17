import { useEffect } from "react";
import { useState } from '@hookstate/core';
import { APIProps, API_BASE_URL, API_GET } from "../utils/api/API";


interface Institution {
  id: number;
  name: string;
  notes: string;
  active: boolean;
  updatedUserId?: number;
  updatedAt?: string;
  createdAt?: string;
 }

export default function Homepage() {
    console.log('HomePage');
    const state = useState<Institution[] | null>(null);

    useEffect( () => {
      const apiProps: APIProps = {
        path: `${API_BASE_URL}/portfolio/institution`
      }
      API_GET(apiProps)
      .then( (resp) => {
        console.log(resp);
        state.set(resp.data);
      })
      .catch( (err) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return ( 
      <div>
        Homepage
        <table>
          <tbody>
              {state.get()?.map(r =>
                  <tr key={r.id}>
                      <td>{r.name}</td>
                      <td>{r.notes}</td>
                  </tr>
              )}
          </tbody>
        </table>
      </div>
    );
  }