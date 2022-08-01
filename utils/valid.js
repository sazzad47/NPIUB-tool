const valid = (ssc_result, hsc_result, diploma_result, bachelors_result) => {
      if (ssc_result > 5 || ssc_result < 1) 
      return ssc_result? 'Your SSC GPA must be 1 to 5' : null
      if (hsc_result > 5 || hsc_result < 1) 
      return hsc_result? 'Your HSC GPA must be 1 to 5' : null
      if (diploma_result > 4 || diploma_result < 1) 
      return diploma_result? 'Your diploma GPA must be 1 to 4' : null
      if (bachelors_result > 4 || bachelors_result < 1) 
      return bachelors_result? 'Your bachelors GPA must be 1 to 4' : null
}

export default valid