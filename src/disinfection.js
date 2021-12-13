const { escape, normalizeEmail, toBoolean, toDate, toFloat, toInt, trim } = require('validator');
const sanitizeHtml = require('sanitize-html');

const boolean = (data) => toBoolean(data, true);
const date = (data) => toDate(data);
const email = (data) => normalizeEmail(data);
const float = (data) => toFloat(data);
const int = (data) => toInt(data);
const text = (data) => trim(escape(data));

const html = (data, options) => {
  if(options.name) options.name = undefined
  return sanitizeHtml(data, options);
}

const regex = (data, options) => {
  const re = new RegExp(options.regex)
  const matched = data.match(re)
  return Array.isArray(matched) && matched.length > 0 ? matched[0] : null
};

exports.boolean = boolean;
exports.date = date;
exports.email = email;
exports.escape = escape;
exports.float = float;
exports.int = int;
exports.number = float;
exports.text = text;
exports.trim = trim;
exports.html = html;
exports.regex = regex;