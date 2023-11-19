enum myDefault {
  maxLength = 140,
}

/**
 * @description
 * @param inputString
 * @param maxLength
 * @returns
 */
const checkStringLength = (
  inputString: string,
  maxLength: number = myDefault.maxLength
): boolean => inputString.length <= maxLength;

/**
 * @description
 * @param inputString
 * @return
 */
const isPalindrome = (inputString: string): boolean => {
  const cleanedString = inputString.toLowerCase().replace(/\s/g, '');
  return cleanedString === cleanedString.split('').reverse().join('');
};

/**
 * @description
 * @param input
 * @returns
 */
const extractAndSumDigits = (input: string | number): number => {
  if (typeof input === 'number') {
    input = input.toString();
  }

  const digits = input.match(/\d/g);

  if (digits === null) {
    return NaN;
  }

  return parseInt(digits.join(''));
};

/**
 *
 * @param  startWorkDay
 * @param  endWorkDay
 * @param  startMeeting
 * @param  meetingDuration
 * @returns
 */
function isMeetingWithinWorkingHours(
  startWorkDay: string,
  endWorkDay: string,
  startMeeting: string,
  meetingDuration: number
): boolean {
  const parseTime = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWorkMinutes: number = parseTime(startWorkDay);
  const endWorkMinutes: number = parseTime(endWorkDay);
  const startMeetingMinutes: number = parseTime(startMeeting);
  const endMeetingMinutes: number = startMeetingMinutes + meetingDuration;

  return (
    startMeetingMinutes >= startWorkMinutes &&
    endMeetingMinutes <= endWorkMinutes &&
    meetingDuration > 0
  );
}

export {
  checkStringLength,
  isPalindrome,
  extractAndSumDigits,
  isMeetingWithinWorkingHours,
};
