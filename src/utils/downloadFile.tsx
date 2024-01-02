export const downloadFile = (fileUrl: string, name: string) => {
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
