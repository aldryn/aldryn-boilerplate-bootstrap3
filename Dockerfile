# <DOCKER_FROM>
# </DOCKER_FROM>

# <NODE>
ADD tools/build /stack/boilerplate

ENV NODE_VERSION=0.12.14 \
    NPM_VERSION=2.15.5

RUN bash /stack/boilerplate/install.sh

ENV NODE_PATH=$NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules \
    PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
# </NODE>

# <DOCKER_BUILD>
# </DOCKER_BUILD>
