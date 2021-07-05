FROM opensuse/leap

ENV WSGI_SCRIPTS=/usr/local/www/wsgi-scripts
ENV WSGI_FILE=/usr/local/www/wsgi-scripts/erikholmgrencom.wsgi
ENV WSGI_APP=/usr/local/www/wsgi-apps/erikholmgrencom
RUN mkdir -p ${WSGI_APP} && mkdir -p ${WSGI_SCRIPTS}

RUN zypper install -y apache2 apache2-devel python3-base python3-devel apache2-mod_wsgi-python3 python3-pip && \
    pip install --upgrade mod-wsgi wheel

COPY . ${WSGI_APP}

RUN echo "from ehcom import app as application" > ${WSGI_FILE} && \
    useradd webrunner -s /bin/false && \
    chown -R ${WSGI_APP} webrunner && \
    chown -R ${WSGI_SCRIPTS} webrunner

USER WEBRUNNER

RUN pip install .

#RUN echo "<VirtualHost *:80> \
#\
    #ServerName www.erikholmgren.com \
    #ServerAlias erikholmgren.com \
    #ServerAlias erikholmgren.org \
    #ServerAlias www.erikholmgren.org \
    #ServerAdmin erik@erikholmgren.com \
#\
    #DocumentRoot ${WSGI_APP} \
#\
    #<Directory ${WSGI_APP}> \
    #<IfVersion < 2.4> \
        #Order allow,deny \
        #Allow from all \
    #</IfVersion> \
    #<IfVersion >= 2.4> \
        #Require all granted \
    #</IfVersion> \
    #</Directory> \
#\
    #WSGIScriptAlias / ${WSGI_FILE} \
#\
    #<Directory ${WSGI_SCRIPTS}> \
    #<IfVersion < 2.4> \
        #Order allow,deny \
        #Allow from all \
    #</IfVersion> \
    #<IfVersion >= 2.4> \
        #Require all granted \
    #</IfVersion> \
    #</Directory> \
#\
#</VirtualHost>" > /etc/apache2/conf.d/ehcom.conf

RUN mod_wsgi-express install-module && \
    mod_wsgi-express module-config && \
    mod_wsgi-express setup-server --entry-point ${WSGI_FILE}  \
                                  --port 80 --https-port 443  \
                                  --document-root ${WSGI_APP} \
                                  --server-name www.erikholmgren.com \
                                  --server-alias erikholmgren.com \
                                  --allow-localhost --user webrunner

ENTRYPOINT mod_wsgi-express start-server
