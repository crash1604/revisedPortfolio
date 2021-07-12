import smtplib

password = ""

sent_from = 'chanakya1604@gmail.com'
to = 'chanakya1604@gmail.com'
subject = 'Subject test 1'
body = 'Nice cut G!'

email_text = """\
From: %s
To: %s
Subject: %s

%s
""" % (sent_from, to, subject, body)

try:
    server_ssl = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server_ssl.ehlo()
    server_ssl.login('chanakya1604@gmail.com', password)
    server_ssl.sendmail(sent_from, to, email_text)
    server_ssl.close()
    print 'mail sent'
except:
    print 'Something went wrong'

# from email import encoders
# from email.mime.text import MIMEText
# from email.mime.base import MIMEBase
# from email.mime.multipart import MIMEMultipart
#
# server = smtplib.SMTP('smtp.google.com', 25)
#
# server.ehlo()
#
# with open('password.txt', 'r') as f:
#     password = f.read()
#
# server.login('chanakya1604@gmail.com', password)
#
# msg = MIMEMultipart()
# msg['From'] = 'Crash'
# msg['To'] = 'chanakya1604@gmail.com'
# msg['Subject'] = 'Test mail from python script'
#
# with open('msg.txt','r') as f:
#     message = f.read()
#
# msg.attach(MIMEText(message, 'plain'))
#
# filename = 'landscape.jpg'
# attachment = open(filename, 'rb')
#
# p = MIMEBase('application', 'octet-stream')
# p.set_payload(attachment.read())
#
# encoders.encode_base64(p)
# p.add_header('Content-Disposition', 'attachment; filename={filename}')
# msg.attach(p)
#
# text = msg.as_string()
# server.sendmail('chanakya1604@gmail.com', 'chanakya1604@gmail.com', text)
