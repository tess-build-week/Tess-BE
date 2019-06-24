const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const model = require('../models/authModel');
const secrets = require('../secrets/secret');