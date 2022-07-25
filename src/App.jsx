import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    await fetch(`https://www.qrcode-monkey.com/qr/custom`, {
      method: "POST",
      config:{
        body: "circle",
        logo: "#facebook"
        },
        size: 300,
        download: false,
        file: "svg"
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  }

  useEffect(fetchAPI, []);
}

