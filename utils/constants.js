const URL_REGEX = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/;
const RU_PATTERN_REGEX = /^[\u0400-\u04FF\s]+$/;
const EN_PATTERN_REGEX = /^[A-Za-z\s]+$/;

module.exports = {
  URL_REGEX,
  RU_PATTERN_REGEX,
  EN_PATTERN_REGEX,
};
