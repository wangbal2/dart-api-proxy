const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DART_BASE_URL = 'https://opendart.fss.or.kr/api';
const API_KEY = process.env.DART_API_KEY || '';

// DART API 프록시 엔드포인트
app.get('/api/dart/:endpoint', async (req, res) => {
  try {
    const { endpoint } = req.params;
    const params = { ...req.query, crtfc_key: API_KEY };
    const response = await axios.get(`${DART_BASE_URL}/${endpoint}.json`, { params });
    res.json(response.data);
  } catch (error) {
    console.error('DART API Error:', error.message);
    res.status(500).json({ error: 'DART API 요청 실패', message: error.message });
  }
});

// 기업 검색
app.get('/api/company', async (req, res) => {
  try {
    const { name } = req.query;
    const response = await axios.get(`${DART_BASE_URL}/company.json`, {
      params: { crtfc_key: API_KEY, corp_name: name }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 공시 목록 조회
app.get('/api/list', async (req, res) => {
  try {
    const response = await axios.get(`${DART_BASE_URL}/list.json`, {
      params: { crtfc_key: API_KEY, ...req.query }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 재무정보 조회
app.get('/api/fnlttSinglAcntAll', async (req, res) => {
  try {
    const response = await axios.get(`${DART_BASE_URL}/fnlttSinglAcntAll.json`, {
      params: { crtfc_key: API_KEY, ...req.query }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'DART API Proxy is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
